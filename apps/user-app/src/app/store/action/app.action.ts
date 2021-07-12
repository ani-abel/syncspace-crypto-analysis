/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction, props } from "@ngrx/store";
import { 
    AuthResponse, 
    ChangePasswordDto, 
    Country, 
    CreateFeedCommentDto, 
    CreateFeedDto, 
    CreateSubscriptionPackageDto, 
    CreateUserAnalystDto, 
    CreateUserDto, 
    DefaultResponseTypeGql, 
    Feed, 
    Feed_Comment, 
    Feed_Like, 
    LoginUserDto, 
    StatisticsDto, 
    Subscription_Package, 
    UpdateFeedDto, 
    UpdateSubscriptionPackageDto, 
    User,
    User_Analyst
} from "@syncspace-crypto-analysis/graphql-config";

export enum AppActionType {
    LOGIN_INITIATED = '[LOGIN] LOGIN_INITIATED',
    LOGIN_SUCCESSFUL = '[LOGIN] LOGIN_SUCCESSFUL',
    LOGIN_FAILED = '[LOGIN] LOGIN_FAILED',

    SIGN_UP_INITIATED = '[SIGN_UP] SIGN_UP_INITIATED',
    SIGN_UP_FAILED = '[SIGN_UP] SIGN_UP_FAILED',
    SIGN_UP_SUCCESSFUL = '[SIGN_UP] SIGN_UP_SUCCESSFUL',

    FIND_COUNTRIES_INITIATED = '[COUNTRIES] FIND_COUNTRIES_INITIATED',
    FIND_COUNTRIES_FAILED = '[COUNTRIES] FIND_COUNTRIES_FAILED',
    FIND_COUNTRIES_SUCCESSFUL = '[COUNTRIES] FIND_COUNTRIES_SUCCESSFUL',

    VERIFY_ACCOUNT_INITIATED = '[ACCOUNT_VERIFICATION] VERIFY_ACCOUNT_INITIATED',
    VERIFY_ACCOUNT_FAILED = '[ACCOUNT_VERIFICATION] VERIFY_ACCOUNT_FAILED',
    VERIFY_ACCOUNT_SUCCESSFUL = '[ACCOUNT_VERIFICATION] VERIFY_ACCOUNT_SUCCESSFUL',

    FORGOTTEN_PASSWORD_INITIATIED = '[FORGOT_PASSWORD] FORGOTTEN_PASSWORD_INITIATIED',
    FORGOTTEN_PASSWORD_FAILED = '[FORGOT_PASSWORD] FORGOTTEN_PASSWORD_FAILED',
    FORGOTTEN_PASSWORD_SUCCESSFUL = '[FORGOT_PASSWORD] FORGOTTEN_PASSWORD_SUCCESSFUL',

    CHANGE_PASSWORD_INITIATED = '[CHANGE_PASSWORD] CHANGE_PASSWORD_INITIATED',
    CHANGE_PASSWORD_FAILED = '[CHANGE_PASSWORD] CHANGE_PASSWORD_FAILED',
    CHANGE_PASSWORD_SUCCESSFUL = '[CHANGE_PASSWORD] CHANGE_PASSWORD_SUCCESSFUL',

    GET_SPONSORED_FEEDS_INITIATED = '[FEEDS] GET_SPONSORED_FEEDS_INITIATED',
    GET_SPONSORED_FEEDS_FAILED = '[FEEDS] GET_SPONSORED_FEEDS_FAILED',
    GET_SPONSORED_FEEDS_SUCCESSFUL = '[FEED] GET_SPONSORED_FEEDS_SUCCESSFUL',

    FIND_FEED_CREATED_BY_USER_INITIATED = '[FEED] FIND_FEED_CREATED_BY_USER_INITIATED',
    FIND_FEED_CREATED_BY_USER_FAILED = '[FEED] FIND_FEED_CREATED_BY_USER_FAILED',
    FIND_FEED_CREATED_BY_USER_SUCCESSFUL = '[FEED] FIND_FEED_CREATED_BY_USER_SUCCESSFUL',

    DELETE_FEED_ITEM_INITIATED = '[FEED] DELETE_FEED_ITEM_INITIATED',
    DELETE_FEED_ITEM_FAILED = '[FEED] DELETE_FEED_ITEM_FAILED',
    DELETE_FEED_ITEM_SUCCESSFUL = '[FEED] DELETE_FEED_ITEM_SUCCESSFUL',

    CREATE_FEED_ITEM_INITITATED = '[FEED] CREATE_FEED_ITEM_INITITATED',
    CREATE_FEED_ITEM_FAILED = '[FEED] CREATE_FEED_ITEM_FAILED',
    CREATE_FEED_ITEM_SUCCESSFUL = '[FEED] CREATE_FEED_ITEM_FAILED',

    FIND_FEED_ITEM_BY_ID_INITIATED = '[FEED] FIND_FEED_ITEM_BY_ID_INITIATED',
    FIND_FEED_ITEM_BY_ID_FAILED = '[FEED] FIND_FEED_ITEM_BY_ID_FAILED',
    FIND_FEED_ITEM_BY_ID_SUCCESSFUL = '[FEED] FIND_FEED_ITEM_BY_ID_SUCCESSFUL',

    FIND_DETAILED_FEED_ITEM_BY_ID_INITIATED = '[FEED] FIND_DETAILED_FEED_ITEM_BY_ID_INITIATED',
    FIND_DETAILED_FEED_ITEM_BY_ID_FAILED = '[FEED] FIND_DETAILED_FEED_ITEM_BY_ID_FAILED',
    FIND_DETAILED_FEED_ITEM_BY_ID_SUCCESSFUL = '[FEED] FIND_DETAILED_FEED_ITEM_BY_ID_SUCCESSFUL',

    FIND_SUBSCRIPTION_PACAKGES_CREATED_BY_USER_INITIATED = '[SUBSCRIPTIONS] FIND_SUBSCRIPTION_PACAKGES_CREATED_BY_USER_INITIATED',
    FIND_SUBSCRIPTION_PACAKGES_CREATED_BY_USER_FAILED = '[SUBSCRIPTIONS] FIND_SUBSCRIPTION_PACAKGES_CREATED_BY_USER_FAILED',
    FIND_SUBSCRIPTION_PACAKGES_CREATED_BY_USER_SUCCESSFUL = '[SUBSCRIPTIONS] FIND_SUBSCRIPTION_PACAKGES_CREATED_BY_USER_SUCCESSFUL',

    UPDATE_FEED_INITIATED = '[FEED] UPDATE_FEED_INITIATED',
    UPDATE_FEED_FAILED = '[FEED] UPDATE_FEED_FAILED',
    UPDATE_FEED_SUCCESSFUL = '[FEED] UPDATE_FEED_SUCCESSFUL',

    CREATE_ANALYST_INITIATED = '[ANALYST] CREATE_ANALYST_INITIATED',
    CREATE_ANALYST_FAILED = '[ANALYST] CREATE_ANALYST_FAILED',
    CREATE_ANALYST_SUCCESSFUL = '[ANALYST] CREATE_ANALYST_SUCCESSFUL',

    CREATE_SUBSCRIPTION_PACKAGE_INITIATED = '[SUBSCRIPTION_PLAN] CREATE_SUBSCRIPTION_PACKAGE_INITIATED',
    CREATE_SUBSCRIPTION_PACKAGE_FAILED = '[SUBSCRIPTION_PLAN] CREATE_SUBSCRIPTION_PACKAGE_FAILED',
    CREATE_SUBSCRIPTION_PACKAGE_SUCCESSFUL = '[SUBCRIPTION_PLAN] CREATE_SUBSCRIPTION_PACKAGE_SUCCESSFUL',

    UPDATE_SUBSCRIPTION_PACKAGE_INITIATED = '[SUBSCRIPTION_PLAN] UPDATE_SUBSCRIPTION_PACKAGE_INITIATED',
    UPDATE_SUBSCRIPTION_PACKAGE_FAILED = '[SUBSCRIPTION_PLAN] UPDATE_SUBSCRIPTION_PACKAGE_FAILED',
    UPDATE_SUBSCRIPTION_PACKAGE_SUCCESSFUL = '[SUBSCRIPTION_PLAN] UPDATE_SUBSCRIPTION_PACKAGE_SUCCESSFUL',

    FIND_SUBSCRIPTION_PACKAGE_BY_ID_INITIATED = '[SUBSCRIPTION_PLAN] FIND_SUBSCRIPTION_PACKAGE_BY_ID_INITIATED',
    FIND_SUBSCRIPTION_PACKAGE_BY_ID_FAILED = '[SUBSCRIPTION_PLAN] FIND_SUBSCRIPTION_PACKAGE_BY_ID_FAILED',
    FIND_SUBSCRIPTION_PACKAGE_BY_ID_SUCCESSFUL = '[SUBSCRIPTION_PLAN] FIND_SUBSCRIPTION_PACKAGE_BY_ID_SUCCESSFUL',

    MAKE_FEED_COMMENT_INITIATED = '[FEED] MAKE_FEED_COMMENT_INITIATED',
    MAKE_FEED_COMMENT_FAILED = '[FEED] MAKE_FEED_COMMENT_FAILED',
    MAKE_FEED_COMMENT_SUCCESSFUL = '[FEED] MAKE_FEED_COMMENT_SUCCESSFUL',

    FIND_FEED_COMMENT_BY_ID_INITIATED = '[FEED] FIND_FEED_COMMENT_BY_ID_INITIATED',
    FIND_FEED_COMMENT_BY_ID_FAILED = '[FEED] FIND_FEED_COMMENT_BY_ID_FAILED',
    FIND_FEED_COMMENT_BY_ID_SUCCESSFUL = '[FEED] FIND_FEED_COMMENT_BY_ID_SUCCESSFUL',

    LIKE_FEED_INITIATED = '[FEED] LIKE_FEED_INITIATED',
    LIKE_FEED_FAILED = '[FEED] LIKE_FEED_FAILED',
    LIKE_FEED_SUCCESSFUL = '[FEED] LIKE_FEED_SUCCESSFUL',

    FIND_DASHBOARD_STATS_INITIATED = '[DASHBOARD] FIND_DASHBOARD_STATS_INITIATED',
    FIND_DASHBOARD_STATS_FAILED = '[DASBOARD] FIND_DASHBOARD_STATS_FAILED',
    FIND_DASHBOARD_STATS_SUCCESSFUL = '[DASHBOARD] FIND_DASHBOARD_STATS_SUCCESSFUL',

    FIND_MY_FEED_INITIATED = '[FEED]  FIND_MY_FEED_INITIATED',
    FIND_MY_FEED_FAILED = '[FEED]  FIND_MY_FEED_FAILED',
    FIND_MY_FEED_SUCCESSFUL = '[FEED]  FIND_MY_FEED_SUCCESSFUL',

    GROUP_FEED_BY_CREATED_USER_INITIATED = '[FEED] GROUP_FEED_BY_CREATED_USER_INITIATED',
    GROUP_FEED_BY_CREATED_USER_FAILED = '[FEED] GROUP_FEED_BY_CREATED_USER_FAILED',
    GROUP_FEED_BY_CREATED_USER_SUCCESSFUL = '[FEED] GROUP_FEED_BY_CREATED_USER_SUCCESSFUL',

    CLEAR_MESSAGES_FROM_STATE = '[MESSAGES] CLEAR_MESSAGES_FROM_STATE',

    CLEAR_APP_STATE = "[APP_ROOT] CLEAR_APP_STATE",
}

export const actions = {
    ClearAppStateAction: createAction(
        AppActionType.CLEAR_APP_STATE
    ),
    LoginInitiatedAction: createAction(
        AppActionType.LOGIN_INITIATED,
        props<{ payload: LoginUserDto }>()
    ),
    LoginFailedAction: createAction(
        AppActionType.LOGIN_FAILED,
        props<{ payload: Error }>(),
    ),
    LoginSuccessfulAction: createAction(
        AppActionType.LOGIN_SUCCESSFUL,
        props<{ payload: Partial<AuthResponse> }>()
    ),
    SignUpInitiatedAction: createAction(
        AppActionType.SIGN_UP_INITIATED,
        props<{ payload: CreateUserDto }>()
    ),
    SignUpFailedAction: createAction(
        AppActionType.SIGN_UP_FAILED,
        props<{ payload: Error }>()
    ),
    SignUpSuccessfulAction: createAction(
        AppActionType.SIGN_UP_SUCCESSFUL,
        props<{ payload: Partial<User> }>()
    ),
    FindCountriesInitiatedAction: createAction(
        AppActionType.FIND_COUNTRIES_INITIATED,
        props<{ payload: boolean }>()
    ),
    FindCountriesFailedAction: createAction(
        AppActionType.FIND_COUNTRIES_FAILED,
        props<{ payload: Error }>()
    ),
    FindCountriesSuccessfulAction: createAction(
        AppActionType.FIND_COUNTRIES_SUCCESSFUL,
        props<{ payload: Partial<Country>[] }>()
    ),
    ClearMessagesFromStateAction: createAction(
        AppActionType.CLEAR_MESSAGES_FROM_STATE,
    ),
    VerifyAccountInitiatedAction: createAction(
        AppActionType.VERIFY_ACCOUNT_INITIATED,
        props<{ payload: string }>()
    ),
    VerifyAccountFailedAction: createAction(
        AppActionType.VERIFY_ACCOUNT_FAILED,
        props<{ payload: Error }>()
    ),
    VerifyAccountSuccessfulAction: createAction(
        AppActionType.VERIFY_ACCOUNT_SUCCESSFUL,
        props<{ payload: Partial<DefaultResponseTypeGql> }>()
    ),
    ForgottenPasswordInitiatedAction: createAction(
        AppActionType.FORGOTTEN_PASSWORD_INITIATIED,
        props<{ payload: string }>()
    ),
    ForgottenPasswordFailedAction: createAction(
        AppActionType.FORGOTTEN_PASSWORD_FAILED,
        props<{ payload: Error }>()
    ),
    ForgottenPasswordSuccessfulAction: createAction(
        AppActionType.FORGOTTEN_PASSWORD_SUCCESSFUL,
        props<{ payload: Partial<DefaultResponseTypeGql> }>()
    ),
    ChangePasswordInitiatedAction: createAction(
        AppActionType.CHANGE_PASSWORD_INITIATED,
        props<{ payload: ChangePasswordDto }>()
    ),
    ChangePasswordFailedAction: createAction(
        AppActionType.CHANGE_PASSWORD_FAILED,
        props<{ payload: Error }>()
    ),
    ChangePasswordSuccessfulAction: createAction(
        AppActionType.CHANGE_PASSWORD_SUCCESSFUL,
        props<{ payload: Partial<DefaultResponseTypeGql> }>()
    ),
    GetSponsoredFeedsInitiatedAction: createAction(
        AppActionType.GET_SPONSORED_FEEDS_INITIATED,
        props<{ payload: number }>()
    ),
    GetSponsoredFeedsFailedAction: createAction(
        AppActionType.GET_SPONSORED_FEEDS_FAILED,
        props<{ payload: Error }>()
    ),
    GetSponsoredFeedsSuccessfulAction: createAction(
        AppActionType.GET_SPONSORED_FEEDS_SUCCESSFUL,
        props<{ payload: Partial<Feed>[] }>()
    ),
    FindFeedCreatedByUserInitiatedAction: createAction(
        AppActionType.FIND_FEED_CREATED_BY_USER_INITIATED,
    ),
    FindFeedCreatedByUserFailedAction: createAction(
        AppActionType.FIND_FEED_CREATED_BY_USER_FAILED,
        props<{ payload: Error }>()
    ),
    FindFeedCreatedByUserSuccessfulAction: createAction(
        AppActionType.FIND_FEED_CREATED_BY_USER_SUCCESSFUL,
        props<{ payload: Partial<Feed | any>[] }>()
    ),
    DeleteFeedItemInitiatedAction: createAction(
        AppActionType.DELETE_FEED_ITEM_INITIATED,
        props<{ payload: UpdateFeedDto, feedId: string }>()
    ),
    DeleteFeedItemFailedAction: createAction(
        AppActionType.DELETE_FEED_ITEM_FAILED,
        props<{ payload: Error }>()
    ),
    DeleteFeedItemSuccessfulAction: createAction(
        AppActionType.DELETE_FEED_ITEM_SUCCESSFUL,
        props<{ deletedFeedId: string, payload: Partial< DefaultResponseTypeGql> }>()
    ),
    CreateFeedItemInitiatedAction: createAction(
        AppActionType.CREATE_FEED_ITEM_INITITATED,
        props<{ payload: CreateFeedDto }>()
    ),
    CreateFeedItemFailedAction: createAction(
        AppActionType.CREATE_FEED_ITEM_FAILED,
        props<{ payload: Error }>()
    ),
    CreateFeedItemSuccessfulAction: createAction(
        AppActionType.CREATE_FEED_ITEM_SUCCESSFUL,
        props<{ payload: Partial<Feed | any> }>()
    ),
    FindFeedItemByIdInitiatedAction: createAction(
        AppActionType.FIND_FEED_ITEM_BY_ID_INITIATED,
        props<{ payload: string }>()
    ),
    FindFeedItemByIdFailedAction: createAction(
        AppActionType.FIND_FEED_ITEM_BY_ID_FAILED,
        props<{ payload: Error }>()
    ),
    FindFeedItemByIdSuccessfulAction: createAction(
        AppActionType.FIND_FEED_ITEM_BY_ID_SUCCESSFUL,
        props<{ payload: Partial<Feed> }>()
    ),
    FindSubscriptionPackagesCreatedByUserInitiatedAction: createAction(
        AppActionType.FIND_SUBSCRIPTION_PACAKGES_CREATED_BY_USER_INITIATED,
    ),
    FindSubscriptionPackagesCreatedByUserFailedAction: createAction(
        AppActionType.FIND_SUBSCRIPTION_PACAKGES_CREATED_BY_USER_FAILED,
        props<{ payload: Error }>()
    ),
    FindSubscriptionPackagesCreatedByUserSuccessfulAction: createAction(
        AppActionType.FIND_SUBSCRIPTION_PACAKGES_CREATED_BY_USER_SUCCESSFUL,
        props<{ payload: Partial<Subscription_Package>[] }>()
    ),
    UpdateFeedInitiatedAction: createAction(
        AppActionType.UPDATE_FEED_INITIATED,
        props<{ payload: UpdateFeedDto }>()
    ),
    UpdateFeedFailedAction: createAction(
        AppActionType.UPDATE_FEED_FAILED,
        props<{ payload: Error }>()
    ),
    UpdateFeedSuccessfulAction: createAction(
        AppActionType.UPDATE_FEED_SUCCESSFUL,
        props<{ payload: Partial<DefaultResponseTypeGql> }>()
    ),
    CreateAnalystInitiatedAction: createAction(
        AppActionType.CREATE_ANALYST_INITIATED,
        props<{ payload: CreateUserAnalystDto }>()
    ),
    CreateAnalystFailedAction: createAction(
        AppActionType.CREATE_ANALYST_FAILED,
        props<{ payload: Error }>()
    ),
    CreateAnalystSuccessfulAction: createAction(
        AppActionType.CREATE_ANALYST_SUCCESSFUL,
        props<{ payload: Partial<User_Analyst> }>()
    ),
    CreateSubscriptionPackageInitiatedAction: createAction(
        AppActionType.CREATE_SUBSCRIPTION_PACKAGE_INITIATED,
        props<{ payload: CreateSubscriptionPackageDto }>()
    ),
    CreateSubscriptionPackageFailedAction: createAction(
        AppActionType.CREATE_SUBSCRIPTION_PACKAGE_FAILED,
        props<{ payload: Error }>()
    ),
    CreateSubscriptionPackageSuccessfulAction: createAction(
        AppActionType.CREATE_SUBSCRIPTION_PACKAGE_SUCCESSFUL,
        props<{ payload: Partial<Subscription_Package> }>(),
    ),
    UpdateSubscriptionPackageInitiatedAction: createAction(
        AppActionType.UPDATE_SUBSCRIPTION_PACKAGE_INITIATED,
        props<{ payload: UpdateSubscriptionPackageDto }>()
    ),
    UpdateSubscriptionPackageFailedAction: createAction(
        AppActionType.UPDATE_SUBSCRIPTION_PACKAGE_FAILED,
        props<{ payload: Error }>()
    ),
    UpdateSubscriptionPackageSuccessfulAction: createAction(
        AppActionType.UPDATE_SUBSCRIPTION_PACKAGE_SUCCESSFUL,
        props<{ packageId: string, payload: Partial<DefaultResponseTypeGql> }>()
    ),
    FindSubscriptionPackageByIdInitiatedAction: createAction(
        AppActionType.FIND_SUBSCRIPTION_PACKAGE_BY_ID_INITIATED,
        props<{ payload: string }>()
    ),
    FindSubscriptionPackageByIdFailedAction: createAction(
        AppActionType.FIND_SUBSCRIPTION_PACKAGE_BY_ID_FAILED,
        props<{ payload: Error }>()
    ),
    FindSubscriptionPackageByIdSuccessfulAction: createAction(
        AppActionType.FIND_SUBSCRIPTION_PACKAGE_BY_ID_SUCCESSFUL,
        props<{ payload: Partial<Subscription_Package> }>()
    ),
    FindDetailedFeedItemByIdInitiatedAction: createAction(
        AppActionType.FIND_DETAILED_FEED_ITEM_BY_ID_INITIATED,
        props<{ payload: string }>()
    ),
    FindDetailedFeedItemByIdFailedAction: createAction(
        AppActionType.FIND_DETAILED_FEED_ITEM_BY_ID_FAILED,
        props<{ payload: Error }>()
    ),
    FindDetailedFeedITemByIdSuccessfulAction: createAction(
        AppActionType.FIND_DETAILED_FEED_ITEM_BY_ID_SUCCESSFUL,
        props<{ payload: Partial<Feed | any> }>()
    ),
    MakeFeedCommentInitiatedAction: createAction(
        AppActionType.MAKE_FEED_COMMENT_INITIATED,
        props<{ payload: CreateFeedCommentDto }>()
    ),
    MakeFeedCommentFailedAction: createAction(
        AppActionType.MAKE_FEED_COMMENT_FAILED,
        props<{ payload: Error }>()
    ),
    MakeFeedCommentSuccessfulAction: createAction(
        AppActionType.MAKE_FEED_COMMENT_SUCCESSFUL,
        props<{ payload: Partial<Feed_Comment> }>()
    ),
    FindFeedCommentByIdInitiatedAction: createAction(
        AppActionType.FIND_FEED_COMMENT_BY_ID_INITIATED,
        props<{ payload: string }>()
    ),
    FindFeedCommentByIdFailedAction: createAction(
        AppActionType.FIND_FEED_COMMENT_BY_ID_FAILED,
        props<{ payload: Error }>()
    ),
    FindFeedCommentByIdSuccessfulAction: createAction(
        AppActionType.FIND_FEED_COMMENT_BY_ID_SUCCESSFUL,
        props<{ payload: Partial<Feed_Comment> }>()
    ),
    LikeFeedInitiatedAction: createAction(
        AppActionType.LIKE_FEED_INITIATED,
        props<{ payload: string }>()
    ),
    LikeFeedFailedAction: createAction(
        AppActionType.LIKE_FEED_FAILED,
        props<{ payload: Error }>()
    ),
    LikeFeedSuccessfulAction: createAction(
        AppActionType.LIKE_FEED_SUCCESSFUL,
        props<{ payload: Partial<Feed_Like> }>()
    ),
    FindDashboardStatsInitiatedAction: createAction(
        AppActionType.FIND_DASHBOARD_STATS_INITIATED,
    ),
    FindDashboardStatsFailedAction: createAction(
        AppActionType.FIND_DASHBOARD_STATS_FAILED,
        props<{ payload: Error }>()
    ),
    FindDashboardStatsSuccessfulAction: createAction(
        AppActionType.FIND_DASHBOARD_STATS_SUCCESSFUL,
        props<{ payload: StatisticsDto[] }>()
    ),
    FindMyFeedInitiatedAction: createAction(
        AppActionType.FIND_MY_FEED_INITIATED
    ),
    FindMyFeedFailedAction: createAction(
        AppActionType.FIND_MY_FEED_FAILED,
        props<{ payload: Error }>()
    ),
    FindMyFeedSuccessfulAction: createAction(
        AppActionType.FIND_MY_FEED_SUCCESSFUL,
        props<{ payload: Partial<Feed | any>[] }>()
    ),
    GroupFeedByCreatedUserInitiatedAction: createAction(
        AppActionType.GROUP_FEED_BY_CREATED_USER_INITIATED,
        props<{ userId: string }>()
    ),
    GroupFeedByCreatedUserFailedAction: createAction(
        AppActionType.GROUP_FEED_BY_CREATED_USER_FAILED,
        props<{ payload: Error }>()
    ),
    GroupFeedByCreatedUserSuccessfulAction: createAction(
        AppActionType.GROUP_FEED_BY_CREATED_USER_SUCCESSFUL,
        props<{ payload: Partial<Feed | any>[] }>()
    ),
};
