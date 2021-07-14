import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feed } from '@syncspace-crypto-analysis/graphql-config';
import { GraphqlRequestsService } from '@syncspace-crypto-analysis/graphql-requests';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'syncspace-crypto-analysis-financial-forcast-detail',
  templateUrl: './financial-forcast-detail.component.html',
  styleUrls: ['./financial-forcast-detail.component.scss']
})
export class FinancialForcastDetailComponent implements OnInit {
  selectedFeedItem$: Observable<Partial<Feed>>;
  topPublicFeed$: Observable<Partial<Feed>[]>;
  feedId: string;
  env = env;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly gqlRequestSrv: GraphqlRequestsService
  ) { }

  ngOnInit(): void {
    this.feedId = this.activatedRoute.snapshot.params?.feedId;
    if (this.feedId) {
      this.topPublicFeed$ = this.gqlRequestSrv.topPublicFeed();
      this.selectedFeedItem$ = this.gqlRequestSrv.findDetailedFeedItemById(this.feedId);
    }
  }

}
