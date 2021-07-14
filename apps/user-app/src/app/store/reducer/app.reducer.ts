import { createReducer, on } from '@ngrx/store';
import { Feed } from '@syncspace-crypto-analysis/graphql-config';
import { InitialAppState } from '../model/app.model';
import { actions as AppActions } from '../action/app.action';
import { 
    updateFeedItemWithNewComment, 
    updateFeedItemWithNewLike, 
    updateFeedWithNewComment, 
    updateFeedWithNewLike 
} from '../utils/app.utils';

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
        return { 
            ...state, 
            isLoading: false, 
            successMessage: 'Successful. Check you email for validation link' 
        };
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
    on(AppActions.DeleteFeedItemInitiatedAction, (state) => {
        return { 
            ...state, 
            isLoading: true, 
        }
    }),
    on(AppActions.DeleteFeedItemSuccessfulAction, (state, { deletedFeedId, payload: { message } }) => {
        const updatedListForUserFeeds: Partial<Feed>[] = state.feedsYouCreated?.filter((feed) => feed.id !== deletedFeedId);
        return { 
            ...state,
            isLoading: false,
            successMessage: message,
            feedsYouCreated: [...updatedListForUserFeeds],
        }
    }),
    on(AppActions.DeleteFeedItemFailedAction, (state, { payload }) => {
        return { 
            ...state, 
            isLoading: false,
            error: payload, 
        }
    }),
    on(AppActions.CreateFeedItemInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(AppActions.CreateFeedItemFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload,
        }
    }),
    on(AppActions.CreateFeedItemSuccessfulAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            feedsYouCreated: [...state.feedsYouCreated, payload],
            successMessage: 'Successful',
        }
    }),
    on(AppActions.FindFeedItemByIdInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true,
        }
    }),
    on(AppActions.FindFeedItemByIdFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload,
        }
    }),
    on(AppActions.FindFeedItemByIdSuccessfulAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            selectedFeedItem: payload,
        }
    }),
    on(AppActions.FindSubscriptionPackagesCreatedByUserInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true,
        }
    }),
    on(AppActions.FindSubscriptionPackagesCreatedByUserFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload,
        }
    }),
    on(AppActions.FindSubscriptionPackagesCreatedByUserSuccessfulAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            subscriptionPackagesYouCreated: payload,
        }
    }),
    on(AppActions.UpdateFeedInitiatedAction, (state) => {
        return { ...state, isLoading: true };
    }),
    on(AppActions.UpdateFeedFailedAction, (state, { payload }) => {
        return { ...state, isLoading: false, error: payload };
    }),
    on(AppActions.UpdateFeedSuccessfulAction, (state, { payload: { message } }) => {
        return {
            ...state,
            isLoading: false,
            successMessage: message,
        }
    }),
    on(AppActions.CreateAnalystInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(AppActions.CreateAnalystFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload,
        }
    }),
    on(AppActions.CreateAnalystSuccessfulAction, (state) => {
        return { 
            ...state,
            isLoading: false,
            successMessage: 'Successful',
        }
    }),
    on(AppActions.CreateSubscriptionPackageInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(AppActions.CreateSubscriptionPackageFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload,
        }
    }),
    on(AppActions.CreateSubscriptionPackageSuccessfulAction, (state) => {
        return {
            ...state,
            isLoading: false,
            successMessage: 'Successful'
        }
    }),
    on(AppActions.UpdateSubscriptionPackageInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true,
        }
    }),
    on(AppActions.UpdateSubscriptionPackageFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload
        }
    }),
    on(AppActions.UpdateSubscriptionPackageSuccessfulAction, (state, { packageId, payload }) => {
        const updatedPackagesList =  state.subscriptionPackagesYouCreated.filter((subPackage) => subPackage.id !== packageId);
        return {
            ...state,
            isLoading: false,
            subscriptionPackagesYouCreated: [...updatedPackagesList],
            successMessage: payload.message
        }
    }),
    on(AppActions.FindSubscriptionPackageByIdInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(AppActions.FindSubscriptionPackageByIdFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload
        }
    }),
    on(AppActions.FindSubscriptionPackageByIdSuccessfulAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            selectedSubscriptionPackage: payload,
        }
    }),
    on(AppActions.FindDetailedFeedItemByIdInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true,
        }
    }),
    on(AppActions.FindDetailedFeedItemByIdFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload,
        }
    }),
    on(AppActions.FindDetailedFeedITemByIdSuccessfulAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            selectedFeedItem: { ...payload },
        }
    }),
    on(AppActions.MakeFeedCommentInitiatedAction, (state) => {

        return {
            ...state,
            isLoading: true,
        }
    }),
    on(AppActions.MakeFeedCommentFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload,
        }
    }),
    on(AppActions.MakeFeedCommentSuccessfulAction, (state, { payload }) => {
        const feedItem: Partial<Feed> = updateFeedItemWithNewComment(state, payload);
        const feed: Partial<Feed>[] = updateFeedWithNewComment(state.feed, payload);
        return {
            ...state,
            feed,
            selectedFeedItem: feedItem,
            isLoading: false,
            successMessage: 'Successful',
        }
    }),
    on(AppActions.FindFeedCommentByIdInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true,
        }
    }),
    on(AppActions.FindFeedCommentByIdFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: true,
            error: payload,
        }
    }),
    on(AppActions.FindFeedCommentByIdSuccessfulAction, (state) => {
        return {
            ...state,
            isLoading: true,
        }
    }),
    on(AppActions.LikeFeedInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(AppActions.LikeFeedFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload
        }
    }),
    on(AppActions.LikeFeedSuccessfulAction, (state, { payload }) => {
        const feedItem: Partial<Feed> = updateFeedItemWithNewLike(state, payload);
        const updatedFeeds: Partial<Feed>[] = updateFeedWithNewLike(state.feed, payload);
        return {
            ...state,
            isLoading: false,
            selectedFeedItem: feedItem,
            feed: [...updatedFeeds],
        }
    }),
    on(AppActions.FindDashboardStatsInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true,
        }
    }),
    on(AppActions.FindDashboardStatsFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload
        }
    }),
    on(AppActions.FindDashboardStatsSuccessfulAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            dashboardStats: [...payload],
        }
    }),
    on(AppActions.FindMyFeedInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true,
        }
    }),
    on(AppActions. FindMyFeedFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload,
        }
    }),
    on(AppActions.FindMyFeedSuccessfulAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            feed: [...payload],
        }
    }),
    on(AppActions.GroupFeedByCreatedUserInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(AppActions.GroupFeedByCreatedUserFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload
        }
    }),
    on(AppActions.GroupFeedByCreatedUserSuccessfulAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            feed: [...payload],
        }
    }),
    on(AppActions.FindUserAnalystByUserIdInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true,
        };
    }),
    on(AppActions.FindUserAnalystByUserIdFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload,
        }
    }),
    on(AppActions.FindUserAnalystByUserIdSuccessfulAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            analystBio: payload,
        }
    }),
    on(AppActions.SubcribeToAnalystInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(AppActions.SubscribeToAnalystFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload
        }
    }),
    on(AppActions.SubscribeToAnalystSuccessfulAction, (state, { userAnalystId }) => {
        // ? Remove from analyst recommendation-list
        const updatedAnalystRecommendations = state.recommendedAnalysts.filter((analyst) => analyst.id !== userAnalystId);
        return {
            ...state,
            isLoading: false,
            successMessage: 'Subscribed',
            recommendedAnalysts: [...updatedAnalystRecommendations],
        }
    }),
    on(AppActions.FindAnalystsIFollowInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(AppActions.FindAnalystsIFollowFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload
        }
    }),
    on(AppActions.FindAnalystsIFollowSuccessfulAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            analystsIFollow: [...payload],
        }
    }),
    on(AppActions.FindRecommendedAnalystInitiatedAction, (state) => {
        return {
            ...state,
            isLoading: true,
        };
    }),
    on(AppActions.FindRecommendedAnalystFailedAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            error: payload,
        };
    }),
    on(AppActions.FindRecommendedAnalystSuccessfulAction, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            recommendedAnalysts: [...payload],
        };
    }),
);
