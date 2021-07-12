/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloError } from "@apollo/client/errors";
import { AuthResponse, Country, Feed, StatisticsDto, Subscription_Package, User, User_Analyst } from "@syncspace-crypto-analysis/graphql-config";

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface AppModel {
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
}

export const InitialAppState: AppModel =  {
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
};
