/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { 
  CategoryTag, 
  Feed, 
  User_Analyst_Subscriber 
} from '@syncspace-crypto-analysis/graphql-config';
import { Observable } from 'rxjs';
import { filter, scan, switchMap } from 'rxjs/operators';
import { AppModel } from '../../store/model/app.model';
import { actions as AppActions } from '../../store/action/app.action';

@Component({
  selector: 'syncspace-crypto-analysis-analysis-feed',
  templateUrl: './analysis-feed.component.html',
  styleUrls: ['./analysis-feed.component.scss']
})
export class AnalysisFeedComponent implements OnInit {
  feeds$: Observable<Feed[]>;
  categoryTags;
  defaultFilter = 'ALL';
  analystsIFollow$: Observable<Partial<User_Analyst_Subscriber>[]>;

  constructor(
    private readonly store: Store<AppModel>,
  ) { }

  onFilterByUserId(userId: string): void {
    this.defaultFilter = userId;
    setTimeout(() => {
      this.store.dispatch(AppActions.GroupFeedByCreatedUserInitiatedAction({ userId }));
      this.feeds$ = this.store.select((data) => data[0].feed);
    }, 0);
  }

  onFilter(feedFilter: string): void {
    this.defaultFilter = feedFilter;
    if (feedFilter === 'ALL') {
      setTimeout(() => {
        this.store.dispatch(AppActions.FindMyFeedInitiatedAction());
        this.feeds$ = this.store.select((data) => data[0].feed);
      }, 0);
    }
    else {
      const feeds$: Observable<Feed[]> = this.store.select((data) => data[0].feed);
      this.feeds$ = feeds$.pipe(
        switchMap((res) => res),
        filter((res) => res.categoryTag === feedFilter),
        scan((acc: Array<Feed>, curr: Feed) => {
          acc.push(curr);
          return acc;
        }, []),
      );
    }
  }

  ngOnInit(): void {
    this.categoryTags = ['ALL', ...Object.values(CategoryTag)];
    setTimeout(() => {
      this.store.dispatch(AppActions.FindMyFeedInitiatedAction());
      this.feeds$ = this.store.select((data) => data[0].feed);

      this.store.dispatch(AppActions.FindAnalystsIFollowInitiatedAction());
      this.analystsIFollow$ = this.store.select((data) => data[0].analystsIFollow);
    }, 0);
  }

  refreshFeed(): void {
    this.defaultFilter = 'ALL';
    setTimeout(() => {
      this.store.dispatch(AppActions.FindMyFeedInitiatedAction());
      this.feeds$ = this.store.select((data) => data[0].feed);
    }, 0);
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

  onFormReset(event: FormGroup): void {
    event.reset();
  }

}
