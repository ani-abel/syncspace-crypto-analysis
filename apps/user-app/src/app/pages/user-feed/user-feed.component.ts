/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthResponse, Feed, User_Analyst } from '@syncspace-crypto-analysis/graphql-config';
import { getDataFromLocalStorage, LocalStorageKey } from '@syncspace-crypto-analysis/utils';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { actions as AppActions } from '../../store/action/app.action';
import { AppModel } from '../../store/model/app.model';

@Component({
  selector: 'syncspace-crypto-analysis-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.scss']
})
export class UserFeedComponent implements 
OnInit,
OnDestroy {
  private subSink: SubSink = new SubSink();
  userId: string;
  userFeeds$: Observable<Feed[]>;
  analystBio$: Observable<User_Analyst>;
  userIdFromLocalStorage: string;
  isSubscriptionComplete;

  constructor(
    private readonly actiavtedRoute: ActivatedRoute,
    private readonly store: Store<AppModel>,
  ) { 
    this.isSubscriptionComplete = false;
  }

  async ngOnInit(): Promise<void> {
    this.userId = this.actiavtedRoute.snapshot.params.userId;
    if (this.userId) {
      setTimeout(() => {
        this.store.dispatch(AppActions.GroupFeedByCreatedUserInitiatedAction({ userId: this.userId }));
        this.userFeeds$ = this.store.select((data) => data[0].feed);

        this.store.dispatch(AppActions.FindUserAnalystByUserIdInitiatedAction({ userId: this.userId }));
        this.analystBio$ = this.store.select((data) => data[0].analystBio);

        this.subSink.sink =
        this.analystBio$.subscribe((res) => {
          if (res?.subscribedUsersToThisAnalyst) {
            this.isSubscriptionComplete =
            res.subscribedUsersToThisAnalyst
              .map((data) => data.user.id)
              .includes(this.userIdFromLocalStorage);
          }
        });
      }, 0);
    }

    const response = await getDataFromLocalStorage<AuthResponse>(LocalStorageKey.SYNCSPACE_USER);
    if (response?.userId) {
      this.userIdFromLocalStorage = response.userId;
    }
  }

  onLike(event: string) {
    if (event) {
      this.store.dispatch(AppActions.LikeFeedInitiatedAction({ payload: event }));
    }
  }

  onComment(event: any) {
    if (event?.id) {
      this.store.dispatch(AppActions.MakeFeedCommentInitiatedAction({
        payload: {
          feedId: event.id,
          body: event.comment,
        }
      }));
    }
  }

  onSubscription(event: boolean, userAnalystId: string): void {
    if (event) {
      this.store.dispatch(AppActions.SubcribeToAnalystInitiatedAction({ userAnalystId }));
      this.subSink.sink =
      this.store
          .select((data) => data[0].successMessage)
          .subscribe((data) => {
            if (data) {
              this.isSubscriptionComplete = true;
            }
          });
    }
  }

  onFormReset(event: FormGroup): void {
    event.reset();
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
