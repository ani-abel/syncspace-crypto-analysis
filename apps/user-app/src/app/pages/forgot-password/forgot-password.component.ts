import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { actions as AppActions } from '../../store/action/app.action';

@Component({
  selector: 'syncspace-crypto-analysis-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements 
OnInit,
OnDestroy {
  private subSink: SubSink = new SubSink();
  
  constructor(
    private readonly store: Store,
  ) { }

  ngOnInit(): void {
  }

  onReset(form: FormGroup): void {
    this.subSink.sink =
    this.store.select((data) => data[0].successMessage)
        .subscribe((data) => {
          if (data) {
            form.reset();
          }
        });
  }

  onSubmit(event: string): void {
    this.store.dispatch(AppActions.ForgottenPasswordInitiatedAction({ payload: event }));
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
