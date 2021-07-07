import { createReducer, on } from '@ngrx/store';
import { InitialAppState } from '../model/app.model';
import { actions as AppActions } from '../action/app.action';

export const GENERIC_ERROR_MESSAGE = 'An error occured';

export const AppReducer = createReducer(
    InitialAppState,
    on(AppActions.ClearAppStateAction, () => {
        return { ...InitialAppState };
    }),
    on(AppActions.LoginInitiatedAction, (state) => {
        return { ...state, isLoading: true }
    }),
    on(AppActions.LoginFailedAction, (state, { payload }) => {
        return { ...state, error: payload, isLoading: false };
    }),
    on(AppActions.LoginSuccessfulAction, (state, { payload }) => {
        return { ...state, isLoading: false, authenticationResponse: payload };
    }),
    on(AppActions.SignUpInitiatedAction, (state) => {
        return { ...state, isLoading: true, };
    }),
    on(AppActions.SignUpFailedAction, (state, { payload }) => {
        return { ...state, isLoading: false, error: payload, }
    }),
    on(AppActions.SignUpSuccessfulAction, (state) => {
        return { ...state, isLoading: false, successMessage: 'Signup successful' };
    }),
    on(AppActions.FindCountriesInitiatedAction, (state) => {
        return { ...state, isLoading: true };
    }),
    on(AppActions.FindCountriesFailedAction, (state, { payload }) => {
        return { 
            ...state, 
            isLoading: false,
            error: payload, 
            errorMessage: payload?.message ?? GENERIC_ERROR_MESSAGE,
        }
    }),
    on(AppActions.FindCountriesSuccessfulAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            countries: payload,
        }
    }),
    on(AppActions.ClearMessagesFromStateAction, (state) => {
        return { 
            ...state, 
            successMessage: undefined, 
            error: undefined,
            errorMessage: undefined
        }
    }),
    on(AppActions.VerifyAccountInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true,
        }
    }),
    on(AppActions.VerifyAccountFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload,
        }
    }),
    on(AppActions.VerifyAccountSuccessfulAction, (state, { payload: { message } }) => {
        return {
            ...state,
            isLoading: false,
            successMessage: message
        }
    }),
    on(AppActions.ForgottenPasswordInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true,
        }
    }),
    on(AppActions.ForgottenPasswordFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload
        }
    }),
    on(AppActions.ForgottenPasswordSuccessfulAction, (state, { payload: { message } }) => {
        return {
            ...state,
            isLoading: false,
            successMessage: message
        }
    }),
    on(AppActions.ChangePasswordInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true,
        }
    }),
    on(AppActions.ChangePasswordFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload
        }
    }),
    on(AppActions.ChangePasswordSuccessfulAction, (state, { payload: { message } }) => {
        return {
            ...state,
            isLoading: false,
            successMessage: message,
        }
    }),
    on(AppActions.GetSponsoredFeedsInitiatedAction, (state) => {
        return { ...state, isLoading: true };
    }),
    on(AppActions.GetSponsoredFeedsFailedAction, (state, { payload }) => {
        return { ...state, isLoading: false, error: payload };
    }),
    on(AppActions.GetSponsoredFeedsSuccessfulAction, (state, { payload }) => {
        return { ...state, isLoading: false, sponsoredFeeds: [...payload] };
    }),
    on(AppActions.FindFeedCreatedByUserInitiatedAction, (state) => {
        return { ...state, isLoading: true };
    }),
    on(AppActions.FindFeedCreatedByUserFailedAction, (state, { payload }) => {
        return { ...state, isLoading: false, error: payload };
    }),
    on(AppActions.FindFeedCreatedByUserSuccessfulAction, (state, { payload }) => {
        return { ...state, isLoading: false, feedsYouCreated: payload };
    }),
);
