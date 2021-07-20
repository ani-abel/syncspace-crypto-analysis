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
  CreateAnalystGQL,
  CreateUserAnalystDto,
  User_Analyst,
  CreateSubscriptionPackageGQL,
  UpdateSubscriptionPackageGQL,
  CreateSubscriptionPackageDto,
  UpdateSubscriptionPackageDto,
  FindSubscriptionPackageByIdGQL,
  FindFeedItemByIdGQL,
  FindFeedCommentbyIdGQL,
  MakeFeedCommentGQL,
  CreateFeedCommentDto,
  LikeFeedGQL,
  FindUserAnalystWithUserIdGQL,
  UserDashboardStatsGQL,
  FindFeedLikeByIdGQL,
  FindAnalystsIFollowGQL,
  Feed_Comment,
  Feed_Like,
  FeedStatatisticsDto, 
  GetFeedStatisticsGQL, 
  TopAnalystsGQL, 
  TopPublicFeedsGQL, 
  CreateContactMessageGQL,
  CreateContactMessageDto,
  ContactMessage,
  StatisticsDto,
  MyFeedGQL,
  FindFeedByUserIdGQL,
  CreateAnalystSubscriberGQL,
  User_Analyst_Subscriber,
  FindRecommendedAnalystsGQL,
  FindUsersSubscribedToPackageGQL,
  FindUsersSubscribedToAnalystGQL,
  MyProfileGQL,
  UpdateProfileGQL,
  UpdateUserDto,
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
    private readonly createContactMessageSrv: CreateContactMessageGQL,
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
    private readonly createAnalystSrv: CreateAnalystGQL,
    private readonly createSubscriptionPackageSrv: CreateSubscriptionPackageGQL,
    private readonly updateSubscriptionPackageSrv: UpdateSubscriptionPackageGQL,
    private readonly findSubscriptionPackageByIdSrv: FindSubscriptionPackageByIdGQL,
    private readonly findFeedItemByIdSrv: FindFeedItemByIdGQL,
    private readonly findFeedCommentbyIdSrv: FindFeedCommentbyIdGQL,
    private readonly makeFeedCommentSrv: MakeFeedCommentGQL,
    private readonly likeFeedSrv: LikeFeedGQL,
    private readonly findFeedLikeByIdSrv: FindFeedLikeByIdGQL,
    private readonly topPublicFeedsSrv: TopPublicFeedsGQL,
    private readonly topAnalystsSrv: TopAnalystsGQL,
    private readonly getFeedStatisticsSrv: GetFeedStatisticsGQL,
    private readonly userDashboardStatsSrv: UserDashboardStatsGQL,
    private readonly findFeedByUserIdSrv: FindFeedByUserIdGQL,
    private readonly myFeedSrv: MyFeedGQL,
    private readonly updateProfileSrv: UpdateProfileGQL,
    private readonly createAnalystSubscriberSrv: CreateAnalystSubscriberGQL,
    private readonly findUserAnalystWithUserIdSrv: FindUserAnalystWithUserIdGQL,
    private readonly findAnalystsIFollowSrv: FindAnalystsIFollowGQL,
    private readonly findRecommendedAnalystsSrv: FindRecommendedAnalystsGQL,
    private readonly findUsersSubscribedToPackageSrv: FindUsersSubscribedToPackageGQL,
    private readonly findUsersSubscribedToAnalystSrv: FindUsersSubscribedToAnalystGQL,
    private readonly myProfileSrv: MyProfileGQL,
    private readonly findSubscriptionPackagesByCurrentUserIdSrv: FindSubscriptionPackagesByCurrentUserIdGQL,
  ) {}

  topPublicFeed(limit: number = 5): Observable<Partial<Feed>[]> {
    return this.topPublicFeedsSrv
      .fetch({ limit })
      .pipe(
        map((res) => res.data.topPublicFeeds),
        catchError((error: ApolloError) => throwError(error.graphQLErrors))
      );
  }

  sendContactMessage(payload: CreateContactMessageDto)
  : Observable<Partial<ContactMessage>> {
    return this.createContactMessageSrv
        .mutate({ payload })
        .pipe(
          map((res) => res.data.createContactMessage),
          catchError((error: ApolloError) => throwError(error.graphQLErrors))
        )
  }

  topAnalysts(limit: number = 5): Observable<Partial<User_Analyst | any>[]> {
    return this.topAnalystsSrv
    .fetch({ limit })
    .pipe(
      map((res) => res.data.topUserAnalysts),
      catchError((error: ApolloError) => throwError(error.graphQLErrors))
    );
  }

  feedStatistics(): Observable<Partial<FeedStatatisticsDto>> {
    return this.getFeedStatisticsSrv
            .fetch()
            .pipe(
              map((res) => res.data.getFeedStatistics),
              catchError((error: ApolloError) => throwError(error.graphQLErrors))
            );
  }

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
              );
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

  createAnalyst(payload: CreateUserAnalystDto)
  : Observable<Partial<User_Analyst>> {
    return this.createAnalystSrv
              .mutate({ payload })
              .pipe(
                map((res) => res.data.createUserAnalyst),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              );
  }

  createSubscriptionPackage(payload: CreateSubscriptionPackageDto)
  : Observable<Partial<Subscription_Package>> {
    return this.createSubscriptionPackageSrv
              .mutate({ payload })
              .pipe(
                map((res) => res.data.createSubscriptionPackage),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              );
  }

  updateSubscriptionPackage(payload: UpdateSubscriptionPackageDto)
  : Observable<Partial<DefaultResponseTypeGql>> {
    return this.updateSubscriptionPackageSrv
              .mutate({ payload })
              .pipe(
                map((res) => res.data.updateSubscriptionPackage),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              );
  }

  findSubscriptionPackageById(subscriptionPackageId: string)
  : Observable<Partial<Subscription_Package>> {
    return this.findSubscriptionPackageByIdSrv
              .fetch({ payload: subscriptionPackageId })
              .pipe(
                map((res) => res.data.findSubscriptionPackageById),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              );
  }

  findDetailedFeedItemById(feedId: string): Observable<Partial<Feed | any>> {
    return this.findFeedItemByIdSrv
              .fetch({ feedId })
              .pipe(
                map((res) => res.data.findFeedById),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              );
  }
  
  makeFeedComment(payload: CreateFeedCommentDto): Observable<Partial<Feed_Comment>> {
    return this.makeFeedCommentSrv
              .mutate({ payload })
              .pipe(
                map((res) => res.data.createFeedComment),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              )
  }

  findFeedCommentById(feedCommentId: string): Observable<Partial<Feed_Comment> | any> {
    return this.findFeedCommentbyIdSrv
              .fetch({ feedCommentId })
              .pipe(
                map((res) => res.data.findFeedCommentsById),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              );
  }

  likeFeed(feedId: string): Observable<Partial<Feed_Like>> {
    return this.likeFeedSrv
              .mutate({ feedId })
              .pipe(
                map((res) => res.data.createLike),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              );
  }

  findFeedLikeById(feedLikeId: string): Observable<Partial<Feed_Like> | any> {
    return this.findFeedLikeByIdSrv
              .fetch({ feedLikeId })
              .pipe(
                map((res) => res.data.findLikeById),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              );
  }

  findUserDashboardStats(): Observable<StatisticsDto[]> {
    return this.userDashboardStatsSrv
              .fetch({})
              .pipe(
                map((res) => res.data.userDashboardStats),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              );
  }

  findFeedByUserId(userId: string): Observable<Partial<Feed | any>[]> {
    return this.findFeedByUserIdSrv
              .fetch({ userId })
              .pipe(
                map((res) => res.data.findFeedByCreatedUser),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              );
  }

  myFeed(): Observable<Partial<Feed | any>[]> {
    return this.myFeedSrv
              .fetch({})
              .pipe(
                map((res) => res.data.myFeed),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              );
  }

  findUserAnalystWithUserId(userId: string): Observable<Partial<User_Analyst | any>> {
    return this.findUserAnalystWithUserIdSrv
               .fetch({ userId })
               .pipe(
                 map((res) => res.data.findUserAnalystWithUserId),
                 catchError((error: ApolloError) => throwError(error.graphQLErrors))
               );
  }

  createUserAnalystSubscriber(userAnalystId: string): Observable<Partial<User_Analyst_Subscriber>> {
    return this.createAnalystSubscriberSrv
              .mutate({ userAnalystId })
              .pipe(
                map((res) => res.data.createUserAnalystSubscriber),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              )
  }

  findAnalystsIFollow(): Observable<Partial<User_Analyst_Subscriber | any>[]> {
    return this.findAnalystsIFollowSrv
               .fetch({})
               .pipe(
                map(({ data }) => data.findAnalystsUserIsSubscribedTo),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
               );
  }

  findRecommendedAnalysts(limit: number): Observable<Partial<User_Analyst | any>[]> {
    return this.findRecommendedAnalystsSrv
                .fetch({ limit })
                .pipe(
                  map(({ data }) => data.findRecommendedAnalysts),
                  catchError((error: ApolloError) => throwError(error.graphQLErrors))
                );
  }

  findUsersSubscribedToAnalyst(userId: string): Observable<Partial<User>[]> {
    return this.findUsersSubscribedToAnalystSrv
              .fetch({ userId })
              .pipe(
                map(({ data }) => data.findUserAnalystWithUserId),
                map(({ subscribedUsersToThisAnalyst }) => {
                  return subscribedUsersToThisAnalyst.map((data) => data.user)
                }),
                catchError((error: ApolloError) => throwError(error.graphQLErrors))
              );
  }

  findUsersSubscribedToPackage(packageId:string)
  : Observable<Partial<Subscription_Package | any>> {
    return this.findUsersSubscribedToPackageSrv
                .fetch({ packageId })
                .pipe(
                  map(({ data }) => data.findSubscriptionPackageById),
                  // map(({ subscribersToThisPackage }) => {
                  //   return subscribersToThisPackage.map((data) => data.user)
                  // }),
                  catchError((error: ApolloError) => throwError(error.graphQLErrors))
                );
  }

  myProfile(): Observable<Partial<User | any>> {
    return this.myProfileSrv
              .fetch({})
              .pipe(
                map(({ data }) => data.myProfile),
                catchError((error: ApolloError) => throwError(error.graphQLErrors)),
              );
  }

  updateProfile(payload: UpdateUserDto): Observable<Partial<DefaultResponseTypeGql>> {
    return this.updateProfileSrv
              .mutate({ payload })
              .pipe(
                map(({ data }) => data.updateUser),
                catchError((error: ApolloError) => throwError(error.graphQLErrors)),
              );
  }

}
