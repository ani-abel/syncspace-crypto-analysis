/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Feed } from '@syncspace-crypto-analysis/graphql-config';
import { Observable } from 'rxjs';
import { AppModel } from '../../store/model/app.model';
import { actions as AppActions } from '../../store/action/app.action';

@Component({
  selector: 'syncspace-crypto-analysis-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.scss'],
})
export class FeedDetailComponent implements OnInit {
  selectedFeedItem$: Observable<Partial<Feed> | any>;
  feedId: string;

  constructor(
    private readonly store: Store<AppModel>,
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.feedId = this.activatedRoute.snapshot.params.feedId;
    if (this.feedId) {
      setTimeout(() => {
        this.store.dispatch(AppActions.FindDetailedFeedItemByIdInitiatedAction({ payload: this.feedId }));
        this.selectedFeedItem$ = this.store.select((data) => data[0].selectedFeedItem);
      }, 0);
    }
  }

  onLike(event: any) {
    console.log(event);
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
