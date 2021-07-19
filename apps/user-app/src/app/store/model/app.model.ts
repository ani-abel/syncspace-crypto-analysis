/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloError } from "@apollo/client/errors";
import { 
    AuthResponse, 
    Country, 
    Feed, 
    StatisticsDto, 
    Subscription_Package, 
    User, 
    User_Analyst, 
    User_Analyst_Subscriber 
} from "@syncspace-crypto-analysis/graphql-config";

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface AppModel {
    myProfile: Partial<User>;
    authenticatedUser: Partial<User>;
    analystBio: Partial<User_Analyst>;
    authenticationResponse: Partial<AuthResponse>;
    isLoading: boolean;
    error: Error | ApolloError;
    successMessage: string;
    errorMessage: string;
    countries: Partial<Country>[];
    sponsoredFeeds: Partial<Feed>[];
    feedsYouCreated: Partial<Feed>[];
    feed: Partial<Feed | any>[];
    selectedFeedItem: Partial<Feed | any>;
    subscriptionPackagesYouCreated: Partial<Subscription_Package>[];
    selectedSubscriptionPackage: Partial<Subscription_Package>;
    dashboardStats: StatisticsDto[],
    analystsIFollow: Partial<User_Analyst_Subscriber | any>[],
    recommendedAnalysts: Partial<User_Analyst>[],
    usersSubscribedToAnalyst: Partial<User>[];
    usersSubscribedToPackage: Partial<Subscription_Package>;
}

export const InitialAppState: AppModel =  {
    myProfile: undefined,
    authenticatedUser: undefined,
    analystBio: undefined,
    authenticationResponse: undefined,
    isLoading: false,
    error: undefined,
    errorMessage: undefined,
    successMessage: undefined,
    countries: [],
    sponsoredFeeds: [],
    feedsYouCreated: [],
    selectedFeedItem: undefined,
    feed: [],
    subscriptionPackagesYouCreated: [],
    selectedSubscriptionPackage: undefined,
    dashboardStats: [],
    analystsIFollow: [],
    recommendedAnalysts: [],
    usersSubscribedToAnalyst: [],
    usersSubscribedToPackage: undefined,
};
