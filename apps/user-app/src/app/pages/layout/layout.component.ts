/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '@syncspace-crypto-analysis/graphql-config';
import { Observable } from 'rxjs';
import { SharedService } from '../../modules/shared/services/shared.service';
import { AppModel } from '../../store/model/app.model';
import { actions as AppActions } from '../../store/action/app.action';

@Component({
  selector: 'syncspace-crypto-analysis-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  myProfile$: Observable<Partial<User>>;
  isOpen = false;

  constructor(
    private readonly sharedSrv: SharedService,
    private readonly store: Store<AppModel>,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.store.dispatch(AppActions.FindMyProfileInitiatedAction());
      this.myProfile$ = this.store.select((data) => data[0].myProfile);
    }, 0);
  }

  openSidebar(): void {
    this.isOpen = true;
  }

  closeSidebar(): void {
    this.isOpen = false;
  }

  onLogout(event: boolean): void {
    this.sharedSrv.onLogout();
  }

}
