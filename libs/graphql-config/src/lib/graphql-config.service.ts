import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};



export enum AccessLevelType {
  Public = 'PUBLIC',
  OnlySubscribers = 'ONLY_SUBSCRIBERS',
  SpecificPackage = 'SPECIFIC_PACKAGE'
}

export enum AnalysisType {
  Fundamental = 'FUNDAMENTAL',
  Technical = 'TECHNICAL'
}

/** Describes the user roles on app */
export enum AppRole {
  Trader = 'TRADER',
  Admin = 'ADMIN',
  VerifiedAnalyst = 'VERIFIED_ANALYST',
  UnverifiedAnalyst = 'UNVERIFIED_ANALYST'
}

export enum AuthProvider {
  Google = 'GOOGLE',
  Local = 'LOCAL',
  Facebook = 'FACEBOOK'
}

/** Describes the response that the user gets when they login */
export type AuthResponse = {
  __typename?: 'AuthResponse';
  userId: Scalars['String'];
  email: Scalars['String'];
  role: AppRole;
  dateCreated: Scalars['DateTime'];
  token: Scalars['String'];
  tokenInitializationDate: Scalars['Float'];
  tokenExpiryDate: Scalars['Float'];
};

export type Country = {
  __typename?: 'COUNTRY';
  id: Scalars['ID'];
  name: Scalars['String'];
  status: Scalars['Boolean'];
  dateCreated: Scalars['DateTime'];
  usersForThisCountry: Array<User>;
};

export enum CategoryTag {
  Forex = 'FOREX',
  Crypto = 'CRYPTO',
  Stocks = 'STOCKS'
}

/** Holds log of all messages sent by potential clients */
export type ContactMessage = {
  __typename?: 'ContactMessage';
  id: Scalars['ID'];
  senderName: Scalars['String'];
  contactEmail: Scalars['String'];
  message: Scalars['String'];
  active: Scalars['Boolean'];
  isRead: Scalars['Boolean'];
  reply?: Maybe<Scalars['String']>;
  dateCreated: Scalars['DateTime'];
};

export type CreateContactMessageDto = {
  senderName: Scalars['String'];
  contactEmail: Scalars['String'];
  message: Scalars['String'];
};

export type CreateFeeSetupDto = {
  amount: Scalars['Float'];
  duration: SubscriptionDurationType;
};

export type CreateFeedCommentDto = {
  feedId: Scalars['String'];
  body: Scalars['String'];
};

export type CreateFeedDto = {
  imageUrl: Scalars['String'];
  title: Scalars['String'];
  body: Scalars['String'];
  /**
   * When tag is set to: SPECIFIC_PACKAGE,
   *         'subscriptionPackageId' must be set
   */
  accessLevel: AccessLevelType;
  categoryTag: CategoryTag;
  subscriptionPackageId?: Maybe<Scalars['String']>;
};

export type CreateFeedSponsorDto = {
  feedId: Scalars['String'];
  duration: SubscriptionDurationType;
  paymentLogId: Scalars['String'];
  feedSetupId: Scalars['String'];
};

export type CreatePaymentLogDto = {
  referenceId: Scalars['String'];
  userId: Scalars['String'];
  amount: Scalars['Float'];
  provider: PaymentProvider;
  status: PaymentStatus;
};

export type CreateSubscriptionPackageDto = {
  name: Scalars['String'];
  price: Scalars['Int'];
  description: Scalars['String'];
  duration: SubscriptionDurationType;
};

export type CreateUserAnalystDto = {
  targetMarket: CategoryTag;
  type: AnalysisType;
  strategy: Scalars['String'];
  bio: Scalars['String'];
};

export type CreateUserDto = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  phone: Scalars['String'];
  countryId?: Maybe<Scalars['String']>;
  role?: Maybe<AppRole>;
  authProvider?: Maybe<AuthProvider>;
};


export type DefaultResponseTypeGql = {
  __typename?: 'DefaultResponseTypeGQL';
  message: Scalars['String'];
  status: RequestStatus;
};

export type Feed = {
  __typename?: 'FEED';
  id: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  /** Flag for who will have view access to an analysis feed created */
  accessLevel: AccessLevelType;
  imageUrl: Scalars['String'];
  subscriptionPackageId?: Maybe<Scalars['String']>;
  /** Only works if a feed item is selected under a particular subs plan */
  subscriptionPackage?: Maybe<Subscription_Package>;
  userId: Scalars['String'];
  user: User;
  categoryTag: CategoryTag;
  dateCreated: Scalars['DateTime'];
  likesForThisFeed: Array<Feed_Like>;
  commentsForThisFeed: Array<Feed_Comment>;
  sponsorshipsForThisFeed: Array<Feed_Sponsorship>;
};

export type Feed_Comment = {
  __typename?: 'FEED_COMMENT';
  id: Scalars['ID'];
  body: Scalars['String'];
  feed: Feed;
  user: User;
  dateCreated: Scalars['DateTime'];
  repliesForThisComment: Array<Feed_Comment_Reply>;
};

export type Feed_Comment_Reply = {
  __typename?: 'FEED_COMMENT_REPLY';
  id: Scalars['ID'];
  feedComment: Feed_Comment;
  user: User;
  body: Scalars['String'];
  dateCreated: Scalars['DateTime'];
};

export type Feed_Like = {
  __typename?: 'FEED_LIKE';
  id: Scalars['ID'];
  user: User;
  feed: Feed;
  dateCreated: Scalars['DateTime'];
};

export type Feed_Sponsorship = {
  __typename?: 'FEED_SPONSORSHIP';
  id: Scalars['ID'];
  paymentLog: Payment_Log;
  feeSetup: Fee_Setup;
  feed: Feed;
  duration: SubscriptionDurationType;
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  status: Scalars['Boolean'];
};

/** Holds how much each sponsorship category costs. I.E Anually: $10 */
export type Fee_Setup = {
  __typename?: 'FEE_SETUP';
  id: Scalars['ID'];
  amount: Scalars['Int'];
  duration: SubscriptionDurationType;
  status: Scalars['Boolean'];
  dateCreated: Scalars['DateTime'];
  feedSponsorshipsUnderThisSetup: Array<Feed_Sponsorship>;
};

export type FeedStatatisticsDto = {
  __typename?: 'FeedStatatisticsDTO';
  sponsoredFeeds: Scalars['Int'];
  totalAnalysts: Scalars['Int'];
  totalFeeds: Scalars['Int'];
};

export type LoginUserDto = {
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
};

export type MessageReplyDto = {
  senderName?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  updateUser: DefaultResponseTypeGql;
  login: AuthResponse;
  createCountry: Country;
  updateCountry: DefaultResponseTypeGql;
  deleteCountry: DefaultResponseTypeGql;
  createFeed: Feed;
  updateFeed: DefaultResponseTypeGql;
  deleteFeed: DefaultResponseTypeGql;
  myFeed: Array<Feed>;
  createPackageSubscriber: Package_Subscriber;
  updatePackageSubsciber: DefaultResponseTypeGql;
  deletePackageSubscriber: DefaultResponseTypeGql;
  createUserAnalystSubscriber: User_Analyst_Subscriber;
  deleteUserAnalystSubscriber: DefaultResponseTypeGql;
  updateUserAnalystSubscriber: DefaultResponseTypeGql;
  createFeedSponsorship: Feed_Sponsorship;
  deleteFeedSponship: DefaultResponseTypeGql;
  createLike: Feed_Like;
  deleteFeedLike: DefaultResponseTypeGql;
  createUserAnalyst: User_Analyst;
  updateUserAnalyst: DefaultResponseTypeGql;
  deleteUserAnalyst: DefaultResponseTypeGql;
  deleteUserAnalystByUserId: DefaultResponseTypeGql;
  createFeedComment: Feed_Comment;
  deleteFeedComment: DefaultResponseTypeGql;
  createPaymentLog: Payment_Log;
  deletePaymentLog: DefaultResponseTypeGql;
  createSubscriptionPackage: Subscription_Package;
  updateSubscriptionPackage: DefaultResponseTypeGql;
  deleteSubscriptionPackage: DefaultResponseTypeGql;
  createFeeSetup: Fee_Setup;
  deleteFeeSetup: DefaultResponseTypeGql;
  updateFeeSetup: DefaultResponseTypeGql;
  createContactMessage: ContactMessage;
  deleteContactMessage: DefaultResponseTypeGql;
  updateContactMessage: DefaultResponseTypeGql;
  replyContactMessage: DefaultResponseTypeGql;
};


export type MutationCreateUserArgs = {
  payload: CreateUserDto;
};


export type MutationUpdateUserArgs = {
  payload: UpdateUserDto;
};


export type MutationLoginArgs = {
  payload: LoginUserDto;
};


export type MutationCreateCountryArgs = {
  name: Scalars['String'];
};


export type MutationUpdateCountryArgs = {
  payload: UpdateCountryDto;
};


export type MutationDeleteCountryArgs = {
  countryId: Scalars['String'];
};


export type MutationCreateFeedArgs = {
  payload: CreateFeedDto;
};


export type MutationUpdateFeedArgs = {
  payload: UpdateFeedDto;
};


export type MutationDeleteFeedArgs = {
  feedId: Scalars['String'];
};


export type MutationCreatePackageSubscriberArgs = {
  subscriptionPackageId: Scalars['String'];
};


export type MutationUpdatePackageSubsciberArgs = {
  payload: UpdatePackageSubscriberDto;
};


export type MutationDeletePackageSubscriberArgs = {
  packageSubscriberId: Scalars['String'];
};


export type MutationCreateUserAnalystSubscriberArgs = {
  userAnalystId: Scalars['String'];
};


export type MutationDeleteUserAnalystSubscriberArgs = {
  userAnalystSubscriberId: Scalars['String'];
};


export type MutationUpdateUserAnalystSubscriberArgs = {
  payload: UpdateUserAnalystSubscriberDto;
};


export type MutationCreateFeedSponsorshipArgs = {
  payload: CreateFeedSponsorDto;
};


export type MutationDeleteFeedSponshipArgs = {
  feedSponsorshipId: Scalars['String'];
};


export type MutationCreateLikeArgs = {
  feedId: Scalars['String'];
};


export type MutationDeleteFeedLikeArgs = {
  feedId: Scalars['String'];
};


export type MutationCreateUserAnalystArgs = {
  payload: CreateUserAnalystDto;
};


export type MutationUpdateUserAnalystArgs = {
  payload: UpdateUserAnalystDto;
};


export type MutationDeleteUserAnalystArgs = {
  userAnalystId: Scalars['String'];
};


export type MutationDeleteUserAnalystByUserIdArgs = {
  userId: Scalars['String'];
};


export type MutationCreateFeedCommentArgs = {
  payload: CreateFeedCommentDto;
};


export type MutationDeleteFeedCommentArgs = {
  feedCommentId: Scalars['String'];
};


export type MutationCreatePaymentLogArgs = {
  payload: CreatePaymentLogDto;
};


export type MutationDeletePaymentLogArgs = {
  paymentLogId: Scalars['String'];
};


export type MutationCreateSubscriptionPackageArgs = {
  payload: CreateSubscriptionPackageDto;
};


export type MutationUpdateSubscriptionPackageArgs = {
  payload: UpdateSubscriptionPackageDto;
};


export type MutationDeleteSubscriptionPackageArgs = {
  packageId: Scalars['String'];
};


export type MutationCreateFeeSetupArgs = {
  payload: CreateFeeSetupDto;
};


export type MutationDeleteFeeSetupArgs = {
  feeSetupId: Scalars['String'];
};


export type MutationUpdateFeeSetupArgs = {
  payload: UpdateFeeSetupDto;
};


export type MutationCreateContactMessageArgs = {
  payload: CreateContactMessageDto;
};


export type MutationDeleteContactMessageArgs = {
  payload: Scalars['String'];
};


export type MutationUpdateContactMessageArgs = {
  payload: UpdateContactMessageDto;
};


export type MutationReplyContactMessageArgs = {
  payload: MessageReplyDto;
};

export type Package_Subscriber = {
  __typename?: 'PACKAGE_SUBSCRIBER';
  id: Scalars['ID'];
  subscriptionPackage: Subscription_Package;
  user: User;
  status: Scalars['Boolean'];
  dateCreated: Scalars['DateTime'];
};

export type Payment_Log = {
  __typename?: 'PAYMENT_LOG';
  id: Scalars['ID'];
  amount: Scalars['Float'];
  user: User;
  provider: PaymentProvider;
  referenceId: Scalars['String'];
  status: PaymentStatus;
  dateCreated: Scalars['DateTime'];
};

export enum PaymentProvider {
  Paystack = 'PAYSTACK',
  Flutterwave = 'FLUTTERWAVE',
  Coinbase = 'COINBASE'
}

export enum PaymentStatus {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Failed = 'FAILED'
}

export type Query = {
  __typename?: 'Query';
  sayHello: DefaultResponseTypeGql;
  findUserById: User;
  findUserByEmail: User;
  findUsers: Array<User>;
  findCountries: Array<Country>;
  findCountryById: Country;
  getFeedStatistics: FeedStatatisticsDto;
  findFeeds: Array<Feed>;
  findFeedById: Feed;
  findFeedByUserId: Array<Feed>;
  topPublicFeeds: Array<Feed>;
  topSponsoredFeeds: Array<Feed>;
  findPackageSubscribers: Array<Package_Subscriber>;
  findPackageSubscriberById: Package_Subscriber;
  findUserAnalyst: Array<User_Analyst_Subscriber>;
  findUserAnalystSubscriberByIdWithRelations: User_Analyst_Subscriber;
  findFeedSponsors: Array<Feed_Sponsorship>;
  findFeedSponsorById: Feed_Sponsorship;
  findLikesByFeed: Array<Feed_Like>;
  findLikes: Array<Feed_Like>;
  findLikeById: Feed_Like;
  findUserAnalysts: Array<User_Analyst>;
  findUserAnalystWithId: User_Analyst;
  topUserAnalysts: Array<User_Analyst>;
  findFeedComments: Array<Feed_Comment>;
  findFeedCommentsById: Feed_Comment;
  findFeedCommentsByFeedId: Feed_Comment;
  findPaymentLogs: Array<Payment_Log>;
  findPaymentLogsByProvider: Array<Payment_Log>;
  findSubscriptionPackages: Array<Subscription_Package>;
  findSubscriptionPackageById: Subscription_Package;
  /** Returns all packages created by a finance analyst */
  findSubscriptionPackagesByUserId: Array<Subscription_Package>;
  findFeeSetups: Array<Fee_Setup>;
  findFeeSetupById: Fee_Setup;
  findContactMessageById: ContactMessage;
  findUnreadContactMessages: Array<ContactMessage>;
  findReadContactMessages: Array<ContactMessage>;
};


export type QueryFindUserByIdArgs = {
  userId: Scalars['String'];
};


export type QueryFindUserByEmailArgs = {
  email: Scalars['String'];
};


export type QueryFindCountryByIdArgs = {
  countryId: Scalars['String'];
};


export type QueryFindFeedByIdArgs = {
  feedId: Scalars['String'];
};


export type QueryTopPublicFeedsArgs = {
  limit: Scalars['Int'];
};


export type QueryTopSponsoredFeedsArgs = {
  limit: Scalars['Int'];
};


export type QueryFindPackageSubscriberByIdArgs = {
  packageSubscriberId: Scalars['String'];
};


export type QueryFindUserAnalystSubscriberByIdWithRelationsArgs = {
  userAnalystSubscriberId: Scalars['String'];
};


export type QueryFindFeedSponsorByIdArgs = {
  feedSponsorshipId: Scalars['String'];
};


export type QueryFindLikesByFeedArgs = {
  feedId: Scalars['String'];
};


export type QueryFindLikeByIdArgs = {
  feedLikeId: Scalars['String'];
};


export type QueryFindUserAnalystWithIdArgs = {
  userAnalystId: Scalars['String'];
};


export type QueryTopUserAnalystsArgs = {
  limit: Scalars['Int'];
};


export type QueryFindFeedCommentsByIdArgs = {
  feedCommentId: Scalars['String'];
};


export type QueryFindFeedCommentsByFeedIdArgs = {
  feedId: Scalars['String'];
};


export type QueryFindPaymentLogsByProviderArgs = {
  provider: Scalars['String'];
};


export type QueryFindSubscriptionPackageByIdArgs = {
  packageId: Scalars['String'];
};


export type QueryFindSubscriptionPackagesByUserIdArgs = {
  userId: Scalars['String'];
};


export type QueryFindFeeSetupByIdArgs = {
  feeSetupId: Scalars['String'];
};


export type QueryFindContactMessageByIdArgs = {
  payload: Scalars['String'];
};

/** Status of http request */
export enum RequestStatus {
  Successful = 'SUCCESSFUL',
  Failed = 'FAILED'
}

export type Subscription_Package = {
  __typename?: 'SUBSCRIPTION_PACKAGE';
  id: Scalars['ID'];
  name: Scalars['String'];
  duration: Scalars['String'];
  price: Scalars['Int'];
  description: Scalars['String'];
  user: User;
  status: Scalars['Boolean'];
  feedsUnderThisPlan: Array<Feed>;
  dateCreated: Scalars['DateTime'];
  subscribersToThisPackage: Array<Package_Subscriber>;
};

export enum SubscriptionDurationType {
  Annually = 'ANNUALLY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY'
}

export type User = {
  __typename?: 'USER';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  countryId: Scalars['String'];
  country: Country;
  status: Scalars['Boolean'];
  profileImageUrl: Scalars['String'];
  role: AppRole;
  authProvider: AuthProvider;
  dateCreated: Scalars['DateTime'];
  feedsCreatedByThisUser: Array<Feed>;
  subscriptionPackagesCreatedByThisUser: Array<Subscription_Package>;
  feedLikesForThisUser: Array<Feed_Like>;
  feedCommentsForThisUser: Array<Feed_Comment>;
  feedCommentRepliesMadeByThisUser: Array<Feed_Comment_Reply>;
  paymentLogsForThisUser: Array<Payment_Log>;
};

export type User_Analyst = {
  __typename?: 'USER_ANALYST';
  id: Scalars['ID'];
  user: User;
  targetMarket: CategoryTag;
  type: AnalysisType;
  strategy: Scalars['String'];
  bio: Scalars['String'];
  dateCreated: Scalars['DateTime'];
  subscribedUsersToThisAnalyst: Array<User_Analyst_Subscriber>;
};

/**
 * Manages records when a suer subsacribes
 * to and follows an analyst
 */
export type User_Analyst_Subscriber = {
  __typename?: 'USER_ANALYST_SUBSCRIBER';
  id: Scalars['ID'];
  user: User;
  userAnalyst: User_Analyst;
  status: Scalars['Boolean'];
  dateCreated: Scalars['DateTime'];
};

export type UpdateContactMessageDto = {
  senderName?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isRead: Scalars['Boolean'];
};

export type UpdateCountryDto = {
  countryId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type UpdateFeeSetupDto = {
  amount?: Maybe<Scalars['Float']>;
  duration?: Maybe<SubscriptionDurationType>;
  feeSetupId: Scalars['String'];
  status?: Maybe<Scalars['Boolean']>;
};

export type UpdateFeedDto = {
  imageUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  /**
   * When tag is set to: SPECIFIC_PACKAGE,
   *         'subscriptionPackageId' must be set
   */
  accessLevel?: Maybe<AccessLevelType>;
  categoryTag?: Maybe<CategoryTag>;
  subscriptionPackageId?: Maybe<Scalars['String']>;
  feedId: Scalars['String'];
};

export type UpdatePackageSubscriberDto = {
  packageSubscriberId: Scalars['String'];
  /**
   * When set to 'false',
   * the user's subscription to a givven package is turned off
   */
  status?: Maybe<Scalars['Boolean']>;
};

export type UpdateSubscriptionPackageDto = {
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<SubscriptionDurationType>;
  subscriptionPackageId: Scalars['String'];
};

export type UpdateUserAnalystDto = {
  targetMarket?: Maybe<CategoryTag>;
  type?: Maybe<AnalysisType>;
  strategy?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
};

export type UpdateUserAnalystSubscriberDto = {
  userAnalystSubscriberId: Scalars['String'];
  userAnalystId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type UpdateUserDto = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  role?: Maybe<AppRole>;
  userId: Scalars['String'];
  status?: Maybe<Scalars['Boolean']>;
  profileImageUrl?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  payload: LoginUserDto;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AuthResponse' }
    & Pick<AuthResponse, 'userId' | 'email' | 'role' | 'token' | 'tokenExpiryDate' | 'tokenInitializationDate'>
  ) }
);

export type CreateContactMessageMutationVariables = Exact<{
  payload: CreateContactMessageDto;
}>;


export type CreateContactMessageMutation = (
  { __typename?: 'Mutation' }
  & { createContactMessage: (
    { __typename?: 'ContactMessage' }
    & Pick<ContactMessage, 'id'>
  ) }
);

export type TopPublicFeedsQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type TopPublicFeedsQuery = (
  { __typename?: 'Query' }
  & { topPublicFeeds: Array<(
    { __typename?: 'FEED' }
    & Pick<Feed, 'id' | 'title' | 'dateCreated' | 'imageUrl' | 'body' | 'categoryTag'>
  )> }
);

export type TopAnalystsQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type TopAnalystsQuery = (
  { __typename?: 'Query' }
  & { topUserAnalysts: Array<(
    { __typename?: 'USER_ANALYST' }
    & Pick<User_Analyst, 'id' | 'bio'>
    & { user: (
      { __typename?: 'USER' }
      & Pick<User, 'id' | 'firstName' | 'lastName' | 'profileImageUrl'>
    ) }
  )> }
);

export type GetFeedStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeedStatisticsQuery = (
  { __typename?: 'Query' }
  & { getFeedStatistics: (
    { __typename?: 'FeedStatatisticsDTO' }
    & Pick<FeedStatatisticsDto, 'sponsoredFeeds' | 'totalAnalysts' | 'totalFeeds'>
  ) }
);

export const LoginDocument = gql`
    mutation login($payload: LoginUserDTO!) {
  login(payload: $payload) {
    userId
    email
    role
    token
    tokenExpiryDate
    tokenInitializationDate
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateContactMessageDocument = gql`
    mutation createContactMessage($payload: CreateContactMessageDTO!) {
  createContactMessage(payload: $payload) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateContactMessageGQL extends Apollo.Mutation<CreateContactMessageMutation, CreateContactMessageMutationVariables> {
    document = CreateContactMessageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TopPublicFeedsDocument = gql`
    query topPublicFeeds($limit: Int!) {
  topPublicFeeds(limit: $limit) {
    id
    title
    dateCreated
    imageUrl
    body
    categoryTag
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TopPublicFeedsGQL extends Apollo.Query<TopPublicFeedsQuery, TopPublicFeedsQueryVariables> {
    document = TopPublicFeedsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TopAnalystsDocument = gql`
    query topAnalysts($limit: Int!) {
  topUserAnalysts(limit: $limit) {
    id
    bio
    user {
      id
      firstName
      lastName
      profileImageUrl
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TopAnalystsGQL extends Apollo.Query<TopAnalystsQuery, TopAnalystsQueryVariables> {
    document = TopAnalystsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetFeedStatisticsDocument = gql`
    query getFeedStatistics {
  getFeedStatistics {
    sponsoredFeeds
    totalAnalysts
    totalFeeds
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetFeedStatisticsGQL extends Apollo.Query<GetFeedStatisticsQuery, GetFeedStatisticsQueryVariables> {
    document = GetFeedStatisticsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }