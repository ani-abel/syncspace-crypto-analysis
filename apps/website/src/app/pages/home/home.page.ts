/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { 
  Feed, 
  FeedStatatisticsDto, 
  GetFeedStatisticsGQL, 
  TopAnalystsGQL, 
  TopPublicFeedsGQL, 
  User_Analyst 
} from '@syncspace-crypto-analysis/graphql-config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'syncspace-crypto-analysis-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  topPublicFeed$: Observable<Partial<Feed>[]>;
  topAnalysts$: Observable<Partial<User_Analyst | any>[]>;
  feedStatistics$: Observable<Partial<FeedStatatisticsDto>>;

  constructor(
    private readonly topPublicFeedsSrv: TopPublicFeedsGQL,
    private readonly topAnalystsSrv: TopAnalystsGQL,
    private readonly getFeedStatisticsSrv: GetFeedStatisticsGQL,
  ) {}

  ngOnInit(): void {
    this.topPublicFeed$ = 
    this.topPublicFeedsSrv
        .fetch({ limit: 5 })
        .pipe(
          map((res) => res.data.topPublicFeeds)
        );

    this.topAnalysts$ = 
    this.topAnalystsSrv
        .fetch({ limit: 5 })
        .pipe(
          map((res) => res.data.topUserAnalysts)
        );

    this.feedStatistics$ = 
    this.getFeedStatisticsSrv
        .fetch()
        .pipe(
          map((res) => res.data.getFeedStatistics)
        );
  }
}
