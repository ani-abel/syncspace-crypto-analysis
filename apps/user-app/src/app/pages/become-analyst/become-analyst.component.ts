import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AnalysisType, AuthResponse, CategoryTag } from '@syncspace-crypto-analysis/graphql-config';
import { getDataFromLocalStorage, LocalStorageKey } from '@syncspace-crypto-analysis/utils';
import { SubSink } from 'subsink';
import { actions as AppActions } from '../../store/action/app.action';
import { AppModel } from '../../store/model/app.model';

@Component({
  selector: 'syncspace-crypto-analysis-become-analyst',
  templateUrl: './become-analyst.component.html',
  styleUrls: ['./become-analyst.component.scss']
})
export class BecomeAnalystComponent implements 
OnInit,
OnDestroy {
  private subSink: SubSink = new SubSink();
  becomeAnalystForm: FormGroup;
  targetMarket = Object.values(CategoryTag);
  analysistTypes = Object.values(AnalysisType);
  email: string;

  constructor(
    private readonly store: Store<AppModel>,
  ) { }

  async ngOnInit(): Promise<void> {
    this.initForm();
    const authResponse = await getDataFromLocalStorage<AuthResponse>(LocalStorageKey.SYNCSPACE_USER);
    if (authResponse?.email) {
      this.email = authResponse.email;
    }
  }

  private initForm(): void {
    this.becomeAnalystForm = new FormGroup({
      bio: new FormControl(null, Validators.required),
      type: new FormControl(AnalysisType.Fundamental, Validators.required),
      strategy: new FormControl(null, Validators.required),
      targetMarket: new FormControl(CategoryTag.Crypto, Validators.required),
    });
  }

  onSubmit(): void {
    if (this.becomeAnalystForm.invalid) {
      return;
    }

    this.store.dispatch(AppActions.CreateAnalystInitiatedAction({
      payload: { ...this.becomeAnalystForm.value }
    }));

    this.subSink.sink =
    this.store
      .select((data) => data[0].successMessage)
      .subscribe((res) => {
        if (res) {
          this.becomeAnalystForm.reset();
          if (this.email) {
            //? Refresh user token to reflect user's new role
            this.store.dispatch(AppActions.LoginWithEmailInitiatedAction({ email: this.email }));
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
