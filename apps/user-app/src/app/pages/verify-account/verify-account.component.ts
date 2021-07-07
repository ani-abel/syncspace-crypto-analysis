import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { actions as AppActions } from '../../store/action/app.action';

@Component({
  selector: 'syncspace-crypto-analysis-verify-account',
  template: ``,
  styleUrls: ['./verify-account.component.scss']
})
export class VerifyAccountComponent implements 
OnInit,
OnDestroy {
  private subSink: SubSink = new SubSink();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly store: Store,
  ) { }

  ngOnInit(): void {
    const { snapshot: { queryParams: { code } } } = this.activatedRoute;
    this.store.dispatch(AppActions.VerifyAccountInitiatedAction({ payload: code }));
    
    this.subSink.sink =
    this.store.select((data) => data[0].successMessage)
    .subscribe((data) => {
      if (data) {
        this.router.navigate(['/login']);
      }
    });

    this.subSink.sink =
    this.store.select((data) => data[0].error)
    .subscribe((data) => {
      if (data) {
        this.router.navigate(['/sign-up']);
      }
    });
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
