import { ApolloError } from "@apollo/client/errors";
import { AuthResponse, Country, Feed, User } from "@syncspace-crypto-analysis/graphql-config";

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface AppModel {
    authenticatedUser: Partial<User>;
    authenticationResponse: Partial<AuthResponse>;
    isLoading: boolean;
    error: Error | ApolloError;
    successMessage: string;
    errorMessage: string;
    countries: Partial<Country>[];
    sponsoredFeeds: Partial<Feed>[];
    feedsYouCreated: Partial<Feed>[];
}

export const InitialAppState: AppModel =  {
    authenticatedUser: undefined,
    authenticationResponse: undefined,
    isLoading: false,
    error: undefined,
    errorMessage: undefined,
    successMessage: undefined,
    countries: undefined,
    sponsoredFeeds: undefined,
    feedsYouCreated: undefined,
};
