import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription_Package, User } from '@syncspace-crypto-analysis/graphql-config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { actions as AppActions } from '../../store/action/app.action'
import { AppModel } from '../../store/model/app.model';

@Component({
  selector: 'syncspace-crypto-analysis-view-package-subscribers',
  templateUrl: './view-package-subscribers.component.html',
  styleUrls: ['./view-package-subscribers.component.scss']
})
export class ViewPackageSubscribersComponent implements OnInit {
  packageId: string;
  activeSubscribers$: Observable<Partial<Subscription_Package>>;
  subscribedUsers$: Observable<Partial<User>[]>;

  constructor(
    private readonly store: Store<AppModel>,
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.packageId = this.activatedRoute.snapshot.params?.packageId;
    if (this.packageId) {
      setTimeout(() => {
        this.store.dispatch(AppActions.FindUserSubscribedToPackageInitaitedAction({ packageId: this.packageId }));
        this.activeSubscribers$ = this.store.select((data) => data[0].usersSubscribedToPackage);

        this.subscribedUsers$ = this.activeSubscribers$.pipe(
                  map((data) => data?.subscribersToThisPackage),
                  map((data) => data?.map((subscriber) => subscriber.user)),
                );
      }, 0);
    }
  }

}
