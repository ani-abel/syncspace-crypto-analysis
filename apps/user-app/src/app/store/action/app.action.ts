/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction, props } from "@ngrx/store";
import { 
    AuthResponse, 
    ChangePasswordDto, 
    Country, 
    CreateUserDto, 
    DefaultResponseTypeGql, 
    Feed, 
    LoginUserDto, 
    User
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
};
