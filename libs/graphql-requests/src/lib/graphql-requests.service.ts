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
  Feed,
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
}
