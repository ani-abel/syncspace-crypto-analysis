import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Feed } from '@syncspace-crypto-analysis/graphql-config';
import { Observable } from 'rxjs';
import { SharedService } from '../../modules/shared/services/shared.service';
import { actions as AppActions} from '../../store/action/app.action';

@Component({
  selector: 'syncspace-crypto-analysis-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sponsoredPosts$: Observable<Partial<Feed>[]>;

  constructor(
    private readonly store: Store,
    private readonly sharedSrv: SharedService,
  ) { 
    // this.store.dispatch(AppActions.GetSponsoredFeedsInitiatedAction({ payload: 5 }));
    this.sponsoredPosts$ = this.sharedSrv.getDataFromStore('sponsoredFeeds', 'GetSponsoredFeedsInitiatedAction', 5);
  }

  ngOnInit(): void { }
}
