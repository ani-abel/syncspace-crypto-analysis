import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { GraphqlRequestsService } from '@syncspace-crypto-analysis/graphql-requests';
import { of } from "rxjs";
import { 
  switchMap, 
  catchError, 
  tap, 
  map, 
  mergeMap 
} from "rxjs/operators";
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

    // deleteFeedById$ = createEffect(() => 
    //     this.actions$.pipe(
    //       ofType(AppActions.DeleteFeedItemInitiatedAction),
    //       switchMap(({ payload }) => {
    //         const feedId = payload
    //         return this.gqlRequestSrv.deleteFeed(payload).pipe(
    //           map((data) => AppActions.DeleteFeedItemSuccessfulAction({ deletedFeedId: feedId, payload : data })),
    //           catchError((error: Error) => of(AppActions.DeleteFeedItemFailedAction({ payload: error })))
    //         )
    //       })
    //     ));

    deleteFeed$ = createEffect(() => 
      this.actions$.pipe(
        ofType(AppActions.DeleteFeedItemInitiatedAction),
        switchMap(({ payload, feedId }) => {
          return this.gqlRequestSrv.updateFeed(payload).pipe(
            map((data) => AppActions.DeleteFeedItemSuccessfulAction({ deletedFeedId: feedId, payload: data })),
            catchError((error: Error) => of(AppActions.DeleteFeedItemFailedAction({ payload: error })))
          )
        })
      ));

    updateFeed$ = createEffect(() => 
      this.actions$.pipe(
        ofType(AppActions.UpdateFeedInitiatedAction),
        switchMap(({ payload }) => {
          return this.gqlRequestSrv.updateFeed(payload).pipe(
            map((data) => AppActions.UpdateFeedSuccessfulAction({ payload: data })),
            catchError((error: Error) => of(AppActions.UpdateFeedFailedAction({ payload: error })))
          )
        })
      ));

    createFeedItem$ = createEffect(() => 
      this.actions$.pipe(
        ofType(AppActions.CreateFeedItemInitiatedAction),
        switchMap(({ payload }) => {
          return this.gqlRequestSrv.createFeed(payload).pipe(
            // ? Make an extra request to pull the newly created Feed
            mergeMap((data) => this.gqlRequestSrv.findFeedById(data.id)),
            map((data) => AppActions.CreateFeedItemSuccessfulAction({ payload: data })), 
            catchError((error: Error) => of(AppActions.CreateFeedItemFailedAction({ payload: error })))
          )
        })
      ));

    findFeedItemById$ = createEffect(() => 
      this.actions$.pipe(
        ofType(AppActions.FindFeedItemByIdInitiatedAction),
        switchMap(({ payload }) => {
          return this.gqlRequestSrv.findFeedById(payload).pipe(
            map((data) => AppActions.FindFeedItemByIdSuccessfulAction({ payload: data })),
            catchError((error: Error) => of(AppActions.FindFeedItemByIdFailedAction({ payload: error })))
          ) 
        })
      ));

      findSubscriptionPackagesByCurrentUserId$ = createEffect(() => 
        this.actions$.pipe(
          ofType(AppActions.FindSubscriptionPackagesCreatedByUserInitiatedAction),
          switchMap(() => {
            return this.gqlRequestSrv.findSubscriptionPackagesByCurrentUserId().pipe(
              map((data) => AppActions.FindSubscriptionPackagesCreatedByUserSuccessfulAction({ payload: data })),
              catchError((error: Error) => of(AppActions.FindSubscriptionPackagesCreatedByUserFailedAction({ payload: error })))
            )
          })
        ));

    createAnalyst$ = createEffect(() => 
      this.actions$.pipe(
        ofType(AppActions.CreateAnalystInitiatedAction),
        switchMap(({ payload }) => {
          return this.gqlRequestSrv.createAnalyst(payload).pipe(
            map((data) => AppActions.CreateAnalystSuccessfulAction({ payload: data }),
            catchError((error: Error) => of(AppActions.CreateAnalystFailedAction({ payload: error })))
          ))
        })
      ));

    createSubscriptionPackage$ = createEffect(() => 
      this.actions$.pipe(
        ofType(AppActions.CreateSubscriptionPackageInitiatedAction),
        switchMap(({ payload }) => {
          return this.gqlRequestSrv.createSubscriptionPackage(payload).pipe(
            map((data) => AppActions.CreateSubscriptionPackageSuccessfulAction({ payload: data })),
            catchError((error: Error) => of(AppActions.CreateSubscriptionPackageFailedAction({ payload: error }))),
          )
        })
      ));

    updateSubcriuptionPackage$ = createEffect(() => 
      this.actions$.pipe(
        ofType(AppActions.UpdateSubscriptionPackageInitiatedAction),
        switchMap(({ payload }) => {
          return this.gqlRequestSrv.updateSubscriptionPackage(payload).pipe(
            map((data) => AppActions.UpdateSubscriptionPackageSuccessfulAction({ 
              packageId: payload.subscriptionPackageId, 
              payload: data 
            })),
            catchError((error: Error) => of(AppActions.UpdateSubscriptionPackageFailedAction({ payload: error })))
          )
        })
      ));

    findSubscriptionPackageById$ = createEffect(() => 
      this.actions$.pipe(
        ofType(AppActions.FindSubscriptionPackageByIdInitiatedAction),
        switchMap(({ payload }) => {
          return this.gqlRequestSrv.findSubscriptionPackageById(payload).pipe(
            map((data) => AppActions.FindSubscriptionPackageByIdSuccessfulAction({ payload: data })),
            catchError((error: Error) => of(AppActions.FindSubscriptionPackageByIdFailedAction({ payload: error })))
          )
        })
      ));

      findDetailedFeedItemById$ = createEffect(() => 
        this.actions$.pipe(
          ofType(AppActions.FindDetailedFeedItemByIdInitiatedAction),
          switchMap(({ payload }) => {
            return this.gqlRequestSrv.findDetailedFeedItemById(payload).pipe(
              map((data) => AppActions.FindDetailedFeedITemByIdSuccessfulAction({ payload: data })),
              catchError((error: Error) => of(AppActions.FindDetailedFeedItemByIdFailedAction({ payload: error })))
            )
          })
        ));

    makeFeedComment$ = createEffect(() => 
      this.actions$.pipe(
        ofType(AppActions.MakeFeedCommentInitiatedAction),
        switchMap(({ payload }) => {
          return this.gqlRequestSrv.makeFeedComment(payload).pipe(
            // ? Pull in the newly created comment into app state
            mergeMap((data) => this.gqlRequestSrv.findFeedCommentById(data.id)),
            map((data) => AppActions.MakeFeedCommentSuccessfulAction({ payload: data })),
            catchError((error: Error) => of(AppActions.MakeFeedCommentFailedAction({ payload: error })))
          )
        })
      ));

    findFeedCommentById$ = createEffect(() => 
      this.actions$.pipe(
        ofType(AppActions.FindFeedCommentByIdInitiatedAction),
        switchMap(({ payload }) => {
          return this.gqlRequestSrv.findFeedCommentById(payload).pipe(
            map((data) => AppActions.FindFeedCommentByIdSuccessfulAction({ payload: data })),
            catchError((error: Error) => of(AppActions.FindFeedCommentByIdFailedAction({ payload: error })))
          )
        })
      ));
}