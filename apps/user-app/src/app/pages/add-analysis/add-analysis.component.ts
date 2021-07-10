/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpRequestService } from '@syncspace-crypto-analysis/http-requests';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { 
  AccessLevelType, 
  CategoryTag, 
  CreateFeedDto, 
  Subscription_Package 
} from '@syncspace-crypto-analysis/graphql-config';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { convertFilesToBase64Strings } from '@syncspace-crypto-analysis/utils';
import { actions as AppActions } from '../../store/action/app.action';
import { mergeMap, tap } from 'rxjs/operators';
import { AppModel } from '../../store/model/app.model';
import { SharedService } from '../../modules/shared/services/shared.service';

@Component({
  selector: 'syncspace-crypto-analysis-add-analysis',
  templateUrl: './add-analysis.component.html',
  styleUrls: ['./add-analysis.component.scss']
})
export class AddAnalysisComponent implements 
OnInit,
OnDestroy {
  private subSink: SubSink = new SubSink();
  addAnalysisForm: FormGroup;
  accessiblityOptions = Object.values(AccessLevelType);
  categoryOptions = Object.values(CategoryTag);
  packagesCreatedByUser$: Observable<Partial<Subscription_Package>[]>;
  imageBase64Url: string;

  constructor(
    private readonly httpRequestSrv: HttpRequestService,
    private readonly store: Store<AppModel>,
    private readonly sharedSrv: SharedService,
  ) { 
    this.packagesCreatedByUser$ = this.sharedSrv.getDataFromStore('subscriptionPackagesYouCreated', 'FindSubscriptionPackagesCreatedByUserInitiatedAction');
  }

  ngOnInit(): void {
    this.initForm();

    this.subSink.sink =
    this.addAnalysisForm
      .get('accessibleTo')
      .valueChanges
      .subscribe((data) => {
        if (data === AccessLevelType.SpecificPackage) {
          this.addAnalysisForm.addControl('package', new FormControl(null, Validators.required));
        }
        else {
          this.addAnalysisForm.removeControl('package');
        }
    });
  }

  initForm(): void {
    this.addAnalysisForm = new FormGroup({
      image: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      category: new FormControl(CategoryTag.Crypto, Validators.required),
      accessibleTo: new FormControl(AccessLevelType.Public, Validators.required),
    });
  }

  async onChange(event: Event): Promise<void> {
    const [firstUrl] = await convertFilesToBase64Strings(event);
    if (firstUrl) {
      this.imageBase64Url = firstUrl;
    
      const files: FileList = (event.target as HTMLInputElement).files;

      //patch the form selector control to the formGroup
      this.addAnalysisForm.patchValue({
        image: files.item(0)
      });
      this.addAnalysisForm.get('image').updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if(this.addAnalysisForm.invalid) {
      return;
    }
    const { 
      value: {
        title,
        image,
        content,
        category,
        accessibleTo,
        package: subscriptionPackage,
      }
    } = this.addAnalysisForm;

    this.subSink.sink =
    this.httpRequestSrv
      .uploadFile(image)
      .pipe(
        tap(({ data }) => {
          const requestPayload: CreateFeedDto = 
          (subscriptionPackage) ? {
            title,
            body: content,
            categoryTag: category,
            accessLevel: accessibleTo,
            imageUrl: data,
            subscriptionPackageId: subscriptionPackage
          } : 
          {
            title,
            body: content,
            categoryTag: category,
            accessLevel: accessibleTo,
            imageUrl: data,
          }
          this.store.dispatch(AppActions.CreateFeedItemInitiatedAction({
            payload: requestPayload
          }));
        }),
        mergeMap((res) => this.store.select((data) => data[0].successMessage))
      ).subscribe((res) => {
        if (res) {
          this.imageBase64Url = null;
          this.addAnalysisForm.reset();
        }
      });
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
