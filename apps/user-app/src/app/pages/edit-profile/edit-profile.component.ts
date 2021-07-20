import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Country, UpdateUserDto, User } from '@syncspace-crypto-analysis/graphql-config';
import { convertFilesToBase64Strings } from '@syncspace-crypto-analysis/utils';
import { HttpRequestService } from '@syncspace-crypto-analysis/http-requests';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { AppModel } from '../../store/model/app.model';
import { actions as AppActions } from '../../store/action/app.action';

@Component({
  selector: 'syncspace-crypto-analysis-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements 
OnInit,
OnDestroy {
  private subSink: SubSink = new SubSink();
  editProfileForm: FormGroup;
  countries$: Observable<Partial<Country>[]>;
  myProfile$: Observable<Partial<User>>;
  profileImageUrl: string;

  constructor(
    private readonly store: Store<AppModel>,
    private readonly httpRequestSrv: HttpRequestService,
  ) { }

  ngOnInit(): void {
    this.initForm();
    setTimeout(() => {
      this.store.dispatch(AppActions.FindCountriesInitiatedAction({ payload: true }));
      this.countries$ = this.store.select((data) => data[0].countries);

      this.store.dispatch((AppActions.FindMyProfileInitiatedAction()));
      this.myProfile$ = this.store.select((data) => data[0].myProfile);

      this.subSink.sink =
      this.myProfile$?.subscribe((data) => {
        if (data?.id) {
          this.editProfileForm.patchValue({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            country: data.country.id,
          });

          this.profileImageUrl = data.profileImageUrl;
        }
      });
    }, 0);
  }

  initForm(): void {
    this.editProfileForm = new FormGroup({
      image: new FormControl(null),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.email
      ])),
      phone: new FormControl(null, Validators.required),
      country: new FormControl("", Validators.required),
      password: new FormControl(null),
    });
  }

  async onChange(event: Event): Promise<void> {
    const [firstUrl] = await convertFilesToBase64Strings(event);
    if (firstUrl) {
      this.profileImageUrl = firstUrl;
    
      const files: FileList = (event.target as HTMLInputElement).files;

      //patch the form selector control to the formGroup
      this.editProfileForm.patchValue({
        image: files.item(0)
      });
      this.editProfileForm.get('image').updateValueAndValidity();
    }
  }

  onSubmit(user: Partial<User>): void {
    if (this.editProfileForm.invalid) {
      return;
    }
    const { 
      value: { 
        firstName, 
        lastName, 
        email,
        phone, 
        country, 
        password,
        image,
      } 
    } = this.editProfileForm;

    const requestPayload: UpdateUserDto = (password) ? 
    {
      userId: user.id,
      firstName,
      lastName,
      countryId: country,
      email,
      phone,
      password
    } :
    {
      userId: user.id,
      firstName,
      lastName,
      countryId: country,
      email,
      phone,
    };

    if (image) {
      this.subSink.sink =
      this.httpRequestSrv
        .uploadFile(image)
        .pipe(
          tap(({ data }) => { 
            if (data) {
              requestPayload.profileImageUrl = data;
              this.store.dispatch(AppActions.UpdateProfileInitiatedAction({ payload: requestPayload }));
            }
          }),
        ).subscribe();
    } else {
      this.store.dispatch(AppActions.UpdateProfileInitiatedAction({ payload: requestPayload })); 
    }
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
