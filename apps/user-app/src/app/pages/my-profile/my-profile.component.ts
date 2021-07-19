import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppModel } from '../../store/model/app.model';
import { actions as AppActions } from '../../store/action/app.action';
import { User } from '@syncspace-crypto-analysis/graphql-config';
import { Observable } from 'rxjs';

@Component({
  selector: 'syncspace-crypto-analysis-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  myProfile$: Observable<Partial<User>>;

  constructor(
    private readonly store: Store<AppModel>,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.store.dispatch(AppActions.FindMyProfileInitiatedAction());
      this.myProfile$ = this.store.select((data) => data[0].myProfile);
    }, 0);
  }

}
