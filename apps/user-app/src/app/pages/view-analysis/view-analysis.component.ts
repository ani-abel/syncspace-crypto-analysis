import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Feed } from '@syncspace-crypto-analysis/graphql-config';
import { Observable } from 'rxjs';
import { actions as AppActions } from '../../store/action/app.action';
import { SharedService } from '../../modules/shared/services/shared.service';

@Component({
  selector: 'syncspace-crypto-analysis-view-analysis',
  templateUrl: './view-analysis.component.html',
  styleUrls: ['./view-analysis.component.scss']
})
export class ViewAnalysisComponent implements OnInit {
  feedCreatedByUser$: Observable<Partial<Feed>[]>;


  constructor(
    private readonly store: Store,
    private readonly sharedSrv: SharedService,
  ) { 
    this.feedCreatedByUser$ = this.sharedSrv.getDataFromStore('feedsYouCreated', 'FindFeedCreatedByUserInitiatedAction');
  }

  ngOnInit(): void { }

  onDelete(feedId: string): void {
    this.store.dispatch(AppActions.DeleteFeedItemInitiatedAction({
      feedId,
      payload: {
        feedId,
        status: false
      },
    }));
  }

}
