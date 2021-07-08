/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from "@angular/core";
import { ApolloError } from "@apollo/client";
import { 
  AuthResponse, 
  LoginGQL, 
  LoginUserDto,
  CreateUserDto,
  SignUpGQL,
  User,
  Country,
  FindActiveCountriesGQL,
  VerifyAccountGQL,
  ForgotPasswordGQL,
  ChangePasswordGQL,
  DefaultResponseTypeGql,
  ChangePasswordDto,
  TopSponsoredFeedsGQL,
  FindFeedCreatedByUserGQL,
  DeleteFeedGQL,
  CreateFeedGQL,
  FindFeedByIdGQL,
  Feed,
  CreateFeedDto,
  FindSubscriptionPackagesByCurrentUserIdGQL,
  Subscription_Package,
  UpdateFeedGQL,
  UpdateFeedDto,
} from "@syncspace-crypto-analysis/graphql-config";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class GraphqlRequestsService {

  constructor(
    private readonly loginGQLSrv: LoginGQL,
    private readonly signUpSrv: SignUpGQL,
    private readonly findActiveCountriesSrv: FindActiveCountriesGQL,
    private readonly verifyAccountSrv: VerifyAccountGQL,
    private readonly forgotPasswordSrv: ForgotPasswordGQL,
    private readonly changePasswordSrv: ChangePasswordGQL,
    private readonly topSponsoredFeedsSrv: TopSponsoredFeedsGQL,
    private readonly findFeedCreatedByUserSrv: FindFeedCreatedByUserGQL,
    private readonly deleteFeedSrv: DeleteFeedGQL,
    private readonly createFeedSrv: CreateFeedGQL,
    private readonly findFeedByIdSrv: FindFeedByIdGQL,
    private readonly updateFeedSrv: UpdateFeedGQL,
    private readonly findSubscriptionPackagesByCurrentUserIdSrv: FindSubscriptionPackagesByCurrentUserIdGQL,
  ) {}

  login(payload: LoginUserDto)
  : Observable<Partial<AuthResponse>> {
      return this.loginGQLSrv
                  .mutate({ payload })
                  .pipe(
                    map((res) => res.data?.login),
                    catchError((error: ApolloError) => throwError(error.graphQLErrors))
                  );
  }

  signUp(payload: CreateUserDto): Observable<Partial<User>> {
    return this.signUpSrv
              .mutate({ payload })
              .pipe(
                map((res) => res.data.createUser),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              );
  }

  findActiveCountries(status: boolean): Observable<Partial<Country>[]> {
    return this.findActiveCountriesSrv
              .fetch({ status })
              .pipe(
                map((res) => res.data.findCountriesByStatus),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              );
  }

  verifyAccount(token: string)
  : Observable<Partial<DefaultResponseTypeGql>> {
    return this.verifyAccountSrv
      .mutate({ verificationToken: token })
      .pipe(
        map((res) => res.data.verifyAccount),
        catchError((error: ApolloError) => throwError(error.graphQLErrors))
      );
  }

  forgotPassword(email: string)
  : Observable<Partial<DefaultResponseTypeGql>> { 
    return this.forgotPasswordSrv
      .mutate({ email })
      .pipe(
        map((res) => res.data.forgotPassword),
        catchError((error: ApolloError) => throwError(error.graphQLErrors))
      );
  }

  changePassword(payload: ChangePasswordDto)
  : Observable<Partial<DefaultResponseTypeGql>> {
    return this.changePasswordSrv
        .mutate({ payload })
        .pipe(
          map((res) => res.data.changePassword),
          catchError((error: ApolloError) => throwError(error.graphQLErrors))
        );
  }

  sponsoredFeeds(limit: number)
  : Observable<Partial<Feed | any>[]> {
    return this.topSponsoredFeedsSrv
              .fetch({ limit })
              .pipe(
                map((res) => res.data.topSponsoredFeeds),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              )
  }

  findFeedCreatedByUser(): Observable<Partial<Feed | any>[]> {
    return this.findFeedCreatedByUserSrv
               .fetch({})
               .pipe(
                map((res) => res.data.findFeedByUserId),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
               );
  }

  deleteFeed(feedId: string)
  : Observable<DefaultResponseTypeGql> {
    return this.deleteFeedSrv
              .mutate({ feedId })
              .pipe(
                map((res) => res.data.deleteFeed),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              );
  }

  createFeed(payload: CreateFeedDto)
  : Observable<Partial<Feed>> {
    return this.createFeedSrv
              .mutate({ payload })
              .pipe(
                map((res) => res.data.createFeed),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              );
  }

  findFeedById(feedId: string)
  : Observable<Partial<Feed | any>> { 
    return this.findFeedByIdSrv
                .fetch({  feedId })
                .pipe(
                  map((res) => res.data.findFeedById),
                  catchError((error: ApolloError) => throwError(error.graphQLErrors))
                );
  }

  findSubscriptionPackagesByCurrentUserId()
  : Observable<Partial<Subscription_Package>[]> {
    return this.findSubscriptionPackagesByCurrentUserIdSrv
              .fetch({})
              .pipe(
                map((res) => res.data.findSubscriptionPackagesByCurrentUserId),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              );
  }

  updateFeed(payload: UpdateFeedDto)
  : Observable<Partial<DefaultResponseTypeGql>> {
    return this.updateFeedSrv
              .mutate({ payload })
              .pipe(
                map((res) => res.data.updateFeed),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              );
  }
  
}
