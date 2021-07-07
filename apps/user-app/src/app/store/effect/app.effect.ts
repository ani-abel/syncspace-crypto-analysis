import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { GraphqlRequestsService } from '@syncspace-crypto-analysis/graphql-requests';
import { of } from "rxjs";
import { switchMap, catchError, tap, map } from "rxjs/operators";
import { SharedService } from "../../modules/shared/services/shared.service";
import { actions as AppActions } from '../action/app.action';

@Injectable({
  providedIn: "root"
})
export class AppEffectService {
  constructor(
    private readonly gqlRequestSrv: GraphqlRequestsService,
    private readonly sharedSrv: SharedService,
    private readonly actions$: Actions,
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.LoginInitiatedAction),
      switchMap((action) => {
        return this.gqlRequestSrv.login(action.payload).pipe(
          map((data) => AppActions.LoginSuccessfulAction({  payload: data })),
          tap(({ payload }) => {
            if (payload?.userId) {
              this.sharedSrv.onLogin(payload);
            }
          }),
          catchError((error: Error) => of(AppActions.LoginFailedAction({ payload: error })))
        )
      })
    ));

    signUp$ = createEffect(() => 
      this.actions$.pipe(
        ofType(AppActions.SignUpInitiatedAction),
        switchMap((action) => {
          return this.gqlRequestSrv.signUp(action.payload).pipe(
            map((data) => AppActions.SignUpSuccessfulAction({ payload: data })),
            tap(({ payload }) => {
              console.log(payload);
            }),
            catchError((error: Error) => of(AppActions.SignUpFailedAction({ payload: error })))
          )
        }),
      ));

    forgotPassword$ = createEffect(() => 
      this.actions$.pipe(
        ofType(AppActions.ForgottenPasswordInitiatedAction),
        switchMap((action) => {
          return this.gqlRequestSrv.forgotPassword(action.payload).pipe(
            map((data) => AppActions.ForgottenPasswordSuccessfulAction({ payload: data })),
            catchError((error: Error) => of(AppActions.ForgottenPasswordFailedAction({ payload: error })))
          )
        })
      ));

    findCounties$ = createEffect(() => 
      this.actions$.pipe(
        ofType(AppActions.FindCountriesInitiatedAction),
        switchMap((action) => {
          return this.gqlRequestSrv.findActiveCountries(action.payload).pipe(
            map((data) => AppActions.FindCountriesSuccessfulAction({ payload: data })),
            catchError((error: Error) => of(AppActions.FindCountriesFailedAction({ payload: error })))
          )
        }),
    ));

    verifyAccount$ = createEffect(() => 
      this.actions$.pipe(
        ofType(AppActions.VerifyAccountInitiatedAction),
        switchMap((action) => {
          return this.gqlRequestSrv.verifyAccount(action.payload).pipe(
            map((data) => AppActions.VerifyAccountSuccessfulAction({ payload: data })),
            catchError((error: Error) => of(AppActions.VerifyAccountFailedAction({ payload: error })))
          )
        })
      ));

    changePassword$ = createEffect(() => 
      this.actions$.pipe(
        ofType(AppActions.ChangePasswordInitiatedAction),
        switchMap((action) => {
          return this.gqlRequestSrv.changePassword(action.payload).pipe(
            map((data) => AppActions.ChangePasswordSuccessfulAction({ payload: data })),
            catchError((error: Error) => of(AppActions.ChangePasswordFailedAction({ payload: error })))
          )
        }),
      ));

      sponsoredPosts$ = createEffect(() => 
        this.actions$.pipe(
          ofType(AppActions.GetSponsoredFeedsInitiatedAction),
          switchMap((action) => {
            return this.gqlRequestSrv.sponsoredFeeds(action.payload).pipe(
              map((data) => AppActions.GetSponsoredFeedsSuccessfulAction({ payload: data })),
              catchError((error: Error) => of(AppActions.GetSponsoredFeedsFailedAction({ payload: error })))
            )
          })
        ));

    findFeedCreatedByUser$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AppActions.FindFeedCreatedByUserInitiatedAction),
        switchMap(() => {
          return this.gqlRequestSrv.findFeedCreatedByUser().pipe(
            map((data) => AppActions.FindFeedCreatedByUserSuccessfulAction({ payload: data })),
            catchError((error: Error) => of(AppActions.FindFeedCreatedByUserFailedAction({ payload: error })))
          )
        })
      ));

}