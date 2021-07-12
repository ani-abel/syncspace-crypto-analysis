import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Feed, StatisticsDto } from '@syncspace-crypto-analysis/graphql-config';
import { Observable } from 'rxjs';
import { actions as AppActions} from '../../store/action/app.action';
import { AppModel } from '../../store/model/app.model';

@Component({
  selector: 'syncspace-crypto-analysis-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardStats$: Observable<StatisticsDto[]>;
  sponsoredPosts$: Observable<Partial<Feed>[]>;

  constructor(
    private readonly store: Store<AppModel>,
  ) { 
    this.store.dispatch(AppActions.GetSponsoredFeedsInitiatedAction({ payload: 5 }));
    this.sponsoredPosts$ = this.store.select((data) => data[0].sponsoredFeeds);

    this.store.dispatch(AppActions.FindDashboardStatsInitiatedAction());
    this.dashboardStats$ = this.store.select((data) => data[0].dashboardStats);
  }

  ngOnInit(): void { }
}
