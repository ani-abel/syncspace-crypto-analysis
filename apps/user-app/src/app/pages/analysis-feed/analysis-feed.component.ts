/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Feed } from '@syncspace-crypto-analysis/graphql-config';
import { Observable } from 'rxjs';
import { AppModel } from '../../store/model/app.model';
import { actions as AppActions } from '../../store/action/app.action';

@Component({
  selector: 'syncspace-crypto-analysis-analysis-feed',
  templateUrl: './analysis-feed.component.html',
  styleUrls: ['./analysis-feed.component.scss']
})
export class AnalysisFeedComponent implements OnInit {
  feeds$: Observable<Feed[]>;

  constructor(
    private readonly store: Store<AppModel>,
  ) { }

  ngOnInit(): void {
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
