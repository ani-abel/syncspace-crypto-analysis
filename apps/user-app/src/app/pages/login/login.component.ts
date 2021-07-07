import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SharedService } from '../../modules/shared/services/shared.service';
import { actions as AppActions } from '../../store/action/app.action';
import { AppModel } from '../../store/model/app.model';

@Component({
  selector: 'syncspace-crypto-analysis-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private readonly store: Store<AppModel>,
    private readonly sharedSrv: SharedService,
  ) { }

  ngOnInit(): void {
    this.sharedSrv.loginAsync();
    this.initForm();
  }

  initForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.compose([
        Validators.email,
        Validators.required
      ])),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.store.dispatch(AppActions.LoginInitiatedAction({ payload: this.loginForm.value }));
  }

}
