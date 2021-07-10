import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SubscriptionDurationType } from '@syncspace-crypto-analysis/graphql-config';
import { SubSink } from 'subsink';
import { AppModel } from '../../store/model/app.model';
import { actions as AppActions } from '../../store/action/app.action';

@Component({
  selector: 'syncspace-crypto-analysis-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.scss']
})
export class AddSubscriptionComponent implements 
OnInit,
OnDestroy {
  private subSink: SubSink = new SubSink();
  addSubscriptionForm: FormGroup;
  durationOptions = Object.values(SubscriptionDurationType);

  constructor(
    private readonly store: Store<AppModel>,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.addSubscriptionForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      duration: new FormControl(SubscriptionDurationType.Weekly, Validators.required),
    });
  }

  onSubmit(): void {
    if (this.addSubscriptionForm.invalid) {
      return;
    }
    const { 
      value: {
        name,
        price,
        duration,
        description
      }
    } = this.addSubscriptionForm;
    this.store.dispatch(AppActions.CreateSubscriptionPackageInitiatedAction({
      payload: { 
        name,
        duration,
        description,
        price: parseInt(price),
       }
    }));

    this.subSink.sink =
    this.store
      .select((data) => data[0].successMessage)
      .subscribe((data) => {
        if (data) {
          this.addSubscriptionForm.reset();
        }
      });
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
