/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpRequestService } from '@syncspace-crypto-analysis/http-requests';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { 
  AccessLevelType, 
  CategoryTag, 
  Feed, 
  Subscription_Package, 
  UpdateFeedDto
} from '@syncspace-crypto-analysis/graphql-config';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { convertFilesToBase64Strings, getValueFromObservable } from '@syncspace-crypto-analysis/utils';
import { Store } from '@ngrx/store';
import { actions as AppActions } from '../../store/action/app.action';
import { mergeMap, tap } from 'rxjs/operators';
import { AppModel } from '../../store/model/app.model';
import { SharedService } from '../../modules/shared/services/shared.service';

@Component({
  selector: 'syncspace-crypto-analysis-edit-analysis',
  templateUrl: './edit-analysis.component.html',
  styleUrls: ['./edit-analysis.component.scss']
})
export class EditAnalysisComponent implements 
OnInit,
OnDestroy {
  private subSink: SubSink = new SubSink();
  editAnalysisForm: FormGroup;
  accessiblityOptions = Object.values(AccessLevelType);
  categoryOptions = Object.values(CategoryTag);
  packagesCreatedByUser$: Observable<Partial<Subscription_Package>[]>;
  imageBase64Url: string;
  selectedFeedItem$: Observable<Partial<Feed>>;
  feedId: string;

  constructor(
    private readonly httpRequestSrv: HttpRequestService,
    private readonly store: Store<AppModel>,
    private readonly sharedSrv: SharedService,
    private readonly activatedRoute: ActivatedRoute,
  ) { 
    this.packagesCreatedByUser$ = this.sharedSrv.getDataFromStore('subscriptionPackagesYouCreated', 'FindSubscriptionPackagesCreatedByUserInitiatedAction');
  }

  ngOnInit(): void {
    this.feedId = this.activatedRoute.snapshot.params?.feedId;
    this.initForm();

    this.subSink.sink =
    this.editAnalysisForm
      .get('accessibleTo')
      .valueChanges
      .subscribe((data) => {
        const feed: Partial<Feed> = getValueFromObservable(this.selectedFeedItem$);
        if (data === AccessLevelType.SpecificPackage) {
          this.editAnalysisForm.addControl('package', new FormControl(null, Validators.required));
          if (feed?.subscriptionPackage) {
            this.editAnalysisForm.get('package').patchValue(feed.subscriptionPackage.id);
          }
        }
        else {
          this.editAnalysisForm.removeControl('package');
        }
      });

    if (this.feedId) {
      this.store.dispatch(AppActions.FindFeedItemByIdInitiatedAction({ payload: this.feedId }));
      this.selectedFeedItem$ = this.store.select((data) => data[0].selectedFeedItem);

      this.subSink.sink = 
      this.selectedFeedItem$
        .subscribe((feed) => {
          if (feed?.id) {
            this.imageBase64Url = feed.imageUrl;
            this.editAnalysisForm.patchValue({
              title: feed.title,
              content: feed.body,
              category: feed?.categoryTag,
              accessibleTo: feed.accessLevel
            });
          }
        });
    }
  }

  async onChange(event: Event): Promise<void> {
    const [firstUrl] = await convertFilesToBase64Strings(event);
    if (firstUrl) {
      this.imageBase64Url = firstUrl;
    
      const files: FileList = (event.target as HTMLInputElement).files;

      //patch the form selector control to the formGroup
      this.editAnalysisForm.patchValue({
        image: files.item(0)
      });
      this.editAnalysisForm.get('image').updateValueAndValidity();
    }
  }

 initForm(): void {
    this.editAnalysisForm = new FormGroup({
      image: new FormControl(null),
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      category: new FormControl(CategoryTag.Crypto, Validators.required),
      accessibleTo: new FormControl(AccessLevelType.Public, Validators.required),
    });
  }

  onSubmit(): void {
    if (this.editAnalysisForm.invalid) {
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
    } = this.editAnalysisForm;
    if (image) {
      this.subSink.sink =
      this.httpRequestSrv
          .uploadFile(image)
          .pipe(
            tap(({ data }) => {
            const requestPayload: UpdateFeedDto = 
              (subscriptionPackage) ? {
                feedId: this.feedId,
                title,
                body: content,
                categoryTag: category,
                accessLevel: accessibleTo,
                imageUrl: data,
                subscriptionPackageId: subscriptionPackage
              } : 
              {
                feedId: this.feedId,
                title,
                body: content,
                categoryTag: category,
                accessLevel: accessibleTo,
                imageUrl: data,
              }
              this.store.dispatch(AppActions.UpdateFeedInitiatedAction({ payload: requestPayload }));
            })
          ).subscribe();
    }
    else {
      const requestPayload: UpdateFeedDto = 
      (subscriptionPackage) ? {
        feedId: this.feedId,
        title,
        body: content,
        categoryTag: category,
        accessLevel: accessibleTo,
        subscriptionPackageId: subscriptionPackage
      } : 
      {
        feedId: this.feedId,
        title,
        body: content,
        categoryTag: category,
        accessLevel: accessibleTo,
      }
      this.store.dispatch(AppActions.UpdateFeedInitiatedAction({ payload: requestPayload }));
    }
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
