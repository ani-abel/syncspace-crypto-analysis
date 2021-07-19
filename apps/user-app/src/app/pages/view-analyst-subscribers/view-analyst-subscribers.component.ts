import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthResponse, User } from '@syncspace-crypto-analysis/graphql-config';
import { getDataFromLocalStorage, LocalStorageKey } from '@syncspace-crypto-analysis/utils';
import { Observable } from 'rxjs';
import { AppModel } from '../../store/model/app.model';
import {actions as AppActions } from '../../store/action/app.action';

@Component({
  selector: 'syncspace-crypto-analysis-view-analyst-subscribers',
  templateUrl: './view-analyst-subscribers.component.html',
  styleUrls: ['./view-analyst-subscribers.component.scss']
})
export class ViewAnalystSubscribersComponent implements OnInit {
  subscribedUsers$: Observable<Partial<User>[]>;

  constructor(
    private readonly store: Store<AppModel>,
  ) { }

  async ngOnInit(): Promise<void> {
    const userData = await getDataFromLocalStorage<AuthResponse>(LocalStorageKey.SYNCSPACE_USER);
    if (userData?.userId) {
      setTimeout(() => {
        this.store.dispatch(AppActions.FindUserSubscribedToAnalystInitaitedAction({ userId: userData.userId }));
        this.subscribedUsers$ = this.store.select((data) => data[0].usersSubscribedToAnalyst);
      }, 0);
    }
  }

}
