import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { SharedService } from '../../modules/shared/services/shared.service';
import { actions as AppActions } from '../../store/action/app.action';

@Component({
  selector: 'syncspace-crypto-analysis-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements 
OnInit,
OnDestroy {
  private subSink: SubSink = new SubSink();
  changePasswordForm: FormGroup;
  arePasswordEqual: boolean;
  validationToken: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly sharedSrv: SharedService,
    private readonly store: Store,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.validationToken = this.activatedRoute.snapshot.queryParams.code;
  }

  initForm(): void {
    this.changePasswordForm = new FormGroup({
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required)
    });
  }

  onInput(password: string, confirmPassword: string): void {
    if (password === confirmPassword) {
      this.arePasswordEqual = true;
    }
    else {
      this.arePasswordEqual = false;
    }
  }

  onSubmit(): void {
    if (
      this.changePasswordForm.invalid || 
      !this.validationToken
    ) {
      return;
    }
    const { value: { password } } = this.changePasswordForm;
    this.store.dispatch(AppActions.ChangePasswordInitiatedAction({ payload: {
      newPassword: password,
      verificationToken: this.validationToken,
    } }));

    this.subSink.sink =
    this.store.select((data) => data[0].successMessage)
      .subscribe((data) => {
        if (data) {
          this.changePasswordForm.reset();
          this.sharedSrv.onLogout();
        }
      });
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
