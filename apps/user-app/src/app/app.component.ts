import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { Observable } from 'rxjs';
import { actions as AppActions } from './store/action/app.action';
import { SharedService } from './modules/shared/services/shared.service';

@Component({
  selector: 'syncspace-crypto-analysis-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements 
OnInit,
OnDestroy {
  private subSink: SubSink = new SubSink();
  isLoading$: Observable<boolean>;

  constructor(
    private readonly store: Store,
    private readonly sharedSrv: SharedService,
  ) {}

  ngOnInit(): void {
    // ?  Errors
    this.subSink.sink =
    this.store.select((data) => data[0].error)
    .subscribe((data) => {
      if (data) {
        if (Array.isArray(data)) {
          this.sharedSrv.displayErrorMessage(data[0]?.message);
        }
        else {
          this.sharedSrv.displayErrorMessage((data as Error)?.message);
        }
        setTimeout(() => {
          this.store.dispatch(AppActions.ClearMessagesFromStateAction());
        }, 5000);
      }
    });

    // ? Server messages
    this.subSink.sink = 
    this.store.select((data) => data[0].successMessage)
    .subscribe((data) => {
      if (data) {
        this.sharedSrv.displayMessage(data);
      }
      setTimeout(() => {
        this.store.dispatch(AppActions.ClearMessagesFromStateAction());
      }, 5000);
    });

    // ? Loader
    this.isLoading$ = this.store.select((data) => data[0].isLoading);
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  // For mobile platforms
  // async createCacheFolder(): Promise<void> {
  //   await Filesystem.mkdir({
  //     directory: FilesystemDirectory.Cache,
  //     path: 'CACHED-IMG',
  //   })
  // }
}
