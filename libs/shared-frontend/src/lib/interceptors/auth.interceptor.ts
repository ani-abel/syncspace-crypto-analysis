/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { getDataFromLocalStorage, LocalStorageKey } from '@syncspace-crypto-analysis/utils';
import { AuthResponse } from '@syncspace-crypto-analysis/graphql-config';
import { Observable, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler)
    : Observable<HttpEvent<unknown>> {
    return from(getDataFromLocalStorage<Partial<AuthResponse>>(LocalStorageKey.SYNCSPACE_USER))
      .pipe(
        mergeMap((res) => {
          if (res?.token) {
            const authRequest = req.clone({
              headers: req.headers.set('Authorization', `Bearer ${res.token}`)
            });
            return next.handle(authRequest);
          }
          return next.handle(req);
        }),
      );
  }
}
