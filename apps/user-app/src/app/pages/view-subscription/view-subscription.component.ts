import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription_Package } from '@syncspace-crypto-analysis/graphql-config';
import { Observable } from 'rxjs';
import { AppModel } from '../../store/model/app.model';
import { actions as AppActions } from '../../store/action/app.action';

@Component({
  selector: 'syncspace-crypto-analysis-view-subscription',
  templateUrl: './view-subscription.component.html',
  styleUrls: ['./view-subscription.component.scss']
})
export class ViewSubscriptionComponent implements OnInit {
  activeSubscription$: Observable<Partial<Subscription_Package>[]>

  constructor(
    private readonly store: Store<AppModel>,
  ) { 
    this.store.dispatch(AppActions.FindSubscriptionPackagesCreatedByUserInitiatedAction());
    this.activeSubscription$ = this.store.select((data) => data[0].subscriptionPackagesYouCreated);
  }

  ngOnInit(): void { }

  onDelete(packageId: string): void {
    this.store.dispatch(AppActions.UpdateSubscriptionPackageInitiatedAction({
      payload: {
        subscriptionPackageId: packageId,
        status: false,
      }
    }));
  }

}
