import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Country } from '@syncspace-crypto-analysis/graphql-config';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { actions as AppActions } from '../../store/action/app.action';
import { AppModel } from '../../store/model/app.model';

@Component({
  selector: 'syncspace-crypto-analysis-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements 
OnInit,
OnDestroy {
  signUpForm: FormGroup;
  countries$: Observable<Partial<Country>[]>;
  private subSink: SubSink = new SubSink();

  constructor(
    private readonly store: Store<AppModel>,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.store.dispatch(AppActions.FindCountriesInitiatedAction({ payload: true }));
    this.countries$ = this.store.select((data) => data[0].countries);
  }

  initForm(): void {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.email
      ])),
      phone: new FormControl(null, Validators.required),
      country: new FormControl("", Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      return;
    }    
    const { value: { 
      country: countryId,
      firstName,
      lastName,
      phone,
      email,
      password
    } } = this.signUpForm;
    this.store.dispatch(AppActions.SignUpInitiatedAction({ 
      payload: { 
        firstName,
        lastName,
        email,
        password,
        phone,
        countryId,
      } }));
    
    this.subSink.sink =
    this.store
      .select((data) => data[0].successMessage)
      .subscribe((data) => {
        if (data) {
          this.signUpForm.reset();
        }
      });
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
