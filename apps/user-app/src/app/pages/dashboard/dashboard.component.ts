import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { 
  Feed, 
  StatisticsDto, 
  User_Analyst 
} from '@syncspace-crypto-analysis/graphql-config';
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
  recommendedAnalysts$: Observable<Partial<User_Analyst>[]>;

  constructor(
    private readonly store: Store<AppModel>,
  ) { }

  ngOnInit(): void { 
    setTimeout(() => {
      this.store.dispatch(AppActions.GetSponsoredFeedsInitiatedAction({ payload: 5 }));
      this.sponsoredPosts$ = this.store.select((data) => data[0].sponsoredFeeds);
  
      this.store.dispatch(AppActions.FindDashboardStatsInitiatedAction());
      this.dashboardStats$ = this.store.select((data) => data[0].dashboardStats);
  
      this.store.dispatch(AppActions.FindRecommendedAnalystInitiatedAction({ limit: 5 }));
      this.recommendedAnalysts$ = this.store.select((data) => data[0].recommendedAnalysts);
    }, 0);
  }

  onSubscribe(analystId: string): void {
    this.store.dispatch(AppActions.SubcribeToAnalystInitiatedAction({ userAnalystId: analystId }));
  }
}
