import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { AuthResponse } from '@syncspace-crypto-analysis/graphql-config';
import { 
  deleteDataFromLocalStorage, 
  getDataFromLocalStorage, 
  LocalStorageKey, 
  saveDataToLocalStorage 
} from '@syncspace-crypto-analysis/utils';
import { BehaviorSubject, Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { actions as AppActions } from '../../../store/action/app.action';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnDestroy {
  private subSink: SubSink = new SubSink();

  constructor(
    private readonly router: Router,
    private readonly toastController: ToastController,
    private readonly store: Store
  ) { }

  async onLogin(payload: Partial<AuthResponse>): Promise<void> {
    await saveDataToLocalStorage(LocalStorageKey.SYNCSPACE_USER, payload);
    this.router.navigate(['/auth']);
  }

  async displayMessage(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      position: 'top',
      color: 'primary',
      buttons: [
        {
          text: 'close',
          role: 'cancel',
          handler: () => {
            console.log('close Toast');
          }
        }
      ]
    });
    toast.present();
  }

  async displayErrorMessage(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      position: 'top',
      color: 'danger',
      buttons: [
        {
          text: 'close',
          role: 'cancel',
          handler: () => {
            console.log('close Toast');
          }
        }
      ]
    });
    toast.present();
  }

  async loginAsync()
  : Promise<void> {
    const payload = await getDataFromLocalStorage<AuthResponse>(LocalStorageKey.SYNCSPACE_USER);
    if (
      payload?.token &&
      (payload.tokenExpiryDate * 1000) > Date.now()
    ) {
      this.router.navigate(['/auth']);
    }
  }

  async onLogout(): Promise<void> {
    await deleteDataFromLocalStorage(LocalStorageKey.SYNCSPACE_USER);
    this.router.navigate(['/login']);
  }

  // Get data from store or from api request
  /**
   * Searches first in the internal store.
   * If resource is found, it returns it.
   * else if fetches the resource from an api request
   */
  getDataFromStore<T, U>(
    key: string,
    initialAction: string,
    payload?: U
  ): Observable<T> {
    const response$: BehaviorSubject<T> = new BehaviorSubject<T>(undefined);
    this.subSink.sink =
    this.store.select((data) => data[0][key])
        .subscribe((data) => {
          if (typeof data === 'undefined') {
            if (payload) {
              this.store.dispatch(AppActions[initialAction]({ payload }));
            }
            else {
              this.store.dispatch(AppActions[initialAction]());
            }
          }
          else {
           setTimeout(() =>  response$.next(data), 0);
          }
        });
    return response$.asObservable();
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}