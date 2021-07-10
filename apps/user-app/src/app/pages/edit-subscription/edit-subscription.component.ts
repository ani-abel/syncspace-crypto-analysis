import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { 
  SubscriptionDurationType, 
  Subscription_Package 
} from '@syncspace-crypto-analysis/graphql-config';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { AppModel } from '../../store/model/app.model';
import { actions as AppActions } from '../../store/action/app.action';

@Component({
  selector: 'syncspace-crypto-analysis-edit-subscription',
  templateUrl: './edit-subscription.component.html',
  styleUrls: ['./edit-subscription.component.scss']
})
export class EditSubscriptionComponent implements 
OnInit,
OnDestroy {
  private subSink: SubSink = new SubSink();
  selectedSubscription$: Observable<Partial<Subscription_Package>>;
  packageId: string;
  updateSubscriptionForm: FormGroup;
  durationOptions = Object.values(SubscriptionDurationType);

  constructor(
    private readonly store: Store<AppModel>,
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.packageId = this.activatedRoute.snapshot.params?.packageId;
    if (this.packageId) {
      
      //? Hack to trigger changeDetection 
      setTimeout(() => {
        this.store.dispatch(AppActions.FindSubscriptionPackageByIdInitiatedAction({ payload: this.packageId }));
        this.selectedSubscription$ = this.store.select((data) => data[0].selectedSubscriptionPackage);

        this.subSink.sink =
        this.selectedSubscription$.subscribe((data) => {
          if (data?.id) {
            this.updateSubscriptionForm.patchValue({
              name: data.name,
              description: data.description,
              duration: data.duration,
              price: data.price
            });
          }
        });
      }, 0);
    }
  }

  initForm(): void {
    this.updateSubscriptionForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      duration: new FormControl(SubscriptionDurationType.Weekly, Validators.required),
    });
  }

  onSubmit(): void {
    if (this.updateSubscriptionForm.invalid || !this.packageId) {
      return;
    }
    const { 
      value: {
        name,
        price,
        duration,
        description
      }
    } = this.updateSubscriptionForm;

    this.store.dispatch(AppActions.UpdateSubscriptionPackageInitiatedAction({
      payload: {
        subscriptionPackageId: this.packageId,
        description,
        duration,
        name,
        price: parseInt(price),
      }
    }));
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
