/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { GraphqlRequestsService } from '@syncspace-crypto-analysis/graphql-requests';
import { 
  Feed, 
  FeedStatatisticsDto, 
  User_Analyst 
} from '@syncspace-crypto-analysis/graphql-config';
import { Observable } from 'rxjs';

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
    private readonly gqlRequestSrv: GraphqlRequestsService,
  ) {}

  ngOnInit(): void {
    this.topPublicFeed$ = this.gqlRequestSrv.topPublicFeed();
    this.topAnalysts$ = this.gqlRequestSrv.topAnalysts();
    this.feedStatistics$ = this.gqlRequestSrv.feedStatistics();
  }
}
