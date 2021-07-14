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

export type ChangePasswordDto = {
  verificationToken: Scalars['String'];
  newPassword: Scalars['String'];
};

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
  status: Scalars['Boolean'];
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
  verifyAccount: DefaultResponseTypeGql;
  forgotPassword: DefaultResponseTypeGql;
  changePassword: DefaultResponseTypeGql;
  login: AuthResponse;
  createCountry: Country;
  updateCountry: DefaultResponseTypeGql;
  deleteCountry: DefaultResponseTypeGql;
  createFeed: Feed;
  updateFeed: DefaultResponseTypeGql;
  deleteFeed: DefaultResponseTypeGql;
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


export type MutationVerifyAccountArgs = {
  accountVerificationToken: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  payload: ChangePasswordDto;
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
  findCountriesByStatus: Array<Country>;
  userDashboardStats: Array<StatisticsDto>;
  findRecommendedAnalysts: Array<User_Analyst>;
  myFeed: Array<Feed>;
  getFeedStatistics: FeedStatatisticsDto;
  findFeeds: Array<Feed>;
  findFeedById: Feed;
  findFeedByUserId: Array<Feed>;
  findFeedByCreatedUser: Array<Feed>;
  topPublicFeeds: Array<Feed>;
  topSponsoredFeeds: Array<Feed>;
  findPackageSubscribers: Array<Package_Subscriber>;
  findPackageSubscriberById: Package_Subscriber;
  findUserAnalyst: Array<User_Analyst_Subscriber>;
  findUserAnalystSubscriberByIdWithRelations: User_Analyst_Subscriber;
  findAnalystsUserIsSubscribedTo: Array<User_Analyst_Subscriber>;
  findFeedSponsors: Array<Feed_Sponsorship>;
  findFeedSponsorById: Feed_Sponsorship;
  findLikesByFeed: Array<Feed_Like>;
  findLikes: Array<Feed_Like>;
  findLikeById: Feed_Like;
  findUserAnalysts: Array<User_Analyst>;
  findUserAnalystWithId: User_Analyst;
  findUserAnalystWithUserId: User_Analyst;
  topUserAnalysts: Array<User_Analyst>;
  findFeedComments: Array<Feed_Comment>;
  findFeedCommentsById: Feed_Comment;
  findFeedCommentsByFeedId: Feed_Comment;
  findPaymentLogs: Array<Payment_Log>;
  findPaymentLogsByProvider: Array<Payment_Log>;
  findSubscriptionPackages: Array<Subscription_Package>;
  findSubscriptionPackageById: Subscription_Package;
  /** Returns all packages created by a finance analyst */
  findSubscriptionPackagesByCurrentUserId: Array<Subscription_Package>;
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


export type QueryFindCountriesByStatusArgs = {
  status: Scalars['Boolean'];
};


export type QueryFindRecommendedAnalystsArgs = {
  limit: Scalars['Int'];
};


export type QueryFindFeedByIdArgs = {
  feedId: Scalars['String'];
};


export type QueryFindFeedByCreatedUserArgs = {
  userId: Scalars['String'];
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


export type QueryFindUserAnalystWithUserIdArgs = {
  userId: Scalars['String'];
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

export type StatisticsDto = {
  __typename?: 'StatisticsDTO';
  key: Scalars['String'];
  value: Scalars['Int'];
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
  accountVerificationToken?: Maybe<Scalars['String']>;
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
  status?: Maybe<Scalars['Boolean']>;
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
  status?: Maybe<Scalars['Boolean']>;
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
    & Pick<AuthResponse, 'userId' | 'email' | 'role' | 'token' | 'tokenExpiryDate' | 'tokenInitializationDate' | 'dateCreated'>
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

export type SignUpMutationVariables = Exact<{
  payload: CreateUserDto;
}>;


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'USER' }
    & Pick<User, 'id' | 'role'>
  ) }
);

export type VerifyAccountMutationVariables = Exact<{
  verificationToken: Scalars['String'];
}>;


export type VerifyAccountMutation = (
  { __typename?: 'Mutation' }
  & { verifyAccount: (
    { __typename?: 'DefaultResponseTypeGQL' }
    & Pick<DefaultResponseTypeGql, 'message' | 'status'>
  ) }
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & { forgotPassword: (
    { __typename?: 'DefaultResponseTypeGQL' }
    & Pick<DefaultResponseTypeGql, 'message' | 'status'>
  ) }
);

export type ChangePasswordMutationVariables = Exact<{
  payload: ChangePasswordDto;
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'DefaultResponseTypeGQL' }
    & Pick<DefaultResponseTypeGql, 'message' | 'status'>
  ) }
);

export type DeleteFeedMutationVariables = Exact<{
  feedId: Scalars['String'];
}>;


export type DeleteFeedMutation = (
  { __typename?: 'Mutation' }
  & { deleteFeed: (
    { __typename?: 'DefaultResponseTypeGQL' }
    & Pick<DefaultResponseTypeGql, 'message' | 'status'>
  ) }
);

export type CreateFeedMutationVariables = Exact<{
  payload: CreateFeedDto;
}>;


export type CreateFeedMutation = (
  { __typename?: 'Mutation' }
  & { createFeed: (
    { __typename?: 'FEED' }
    & Pick<Feed, 'id'>
  ) }
);

export type UpdateFeedMutationVariables = Exact<{
  payload: UpdateFeedDto;
}>;


export type UpdateFeedMutation = (
  { __typename?: 'Mutation' }
  & { updateFeed: (
    { __typename?: 'DefaultResponseTypeGQL' }
    & Pick<DefaultResponseTypeGql, 'message' | 'status'>
  ) }
);

export type CreateAnalystMutationVariables = Exact<{
  payload: CreateUserAnalystDto;
}>;


export type CreateAnalystMutation = (
  { __typename?: 'Mutation' }
  & { createUserAnalyst: (
    { __typename?: 'USER_ANALYST' }
    & Pick<User_Analyst, 'id'>
  ) }
);

export type CreateSubscriptionPackageMutationVariables = Exact<{
  payload: CreateSubscriptionPackageDto;
}>;


export type CreateSubscriptionPackageMutation = (
  { __typename?: 'Mutation' }
  & { createSubscriptionPackage: (
    { __typename?: 'SUBSCRIPTION_PACKAGE' }
    & Pick<Subscription_Package, 'id'>
  ) }
);

export type UpdateSubscriptionPackageMutationVariables = Exact<{
  payload: UpdateSubscriptionPackageDto;
}>;


export type UpdateSubscriptionPackageMutation = (
  { __typename?: 'Mutation' }
  & { updateSubscriptionPackage: (
    { __typename?: 'DefaultResponseTypeGQL' }
    & Pick<DefaultResponseTypeGql, 'message' | 'status'>
  ) }
);

export type MakeFeedCommentMutationVariables = Exact<{
  payload: CreateFeedCommentDto;
}>;


export type MakeFeedCommentMutation = (
  { __typename?: 'Mutation' }
  & { createFeedComment: (
    { __typename?: 'FEED_COMMENT' }
    & Pick<Feed_Comment, 'id'>
  ) }
);

export type LikeFeedMutationVariables = Exact<{
  feedId: Scalars['String'];
}>;


export type LikeFeedMutation = (
  { __typename?: 'Mutation' }
  & { createLike: (
    { __typename?: 'FEED_LIKE' }
    & Pick<Feed_Like, 'id'>
  ) }
);

export type CreateAnalystSubscriberMutationVariables = Exact<{
  userAnalystId: Scalars['String'];
}>;


export type CreateAnalystSubscriberMutation = (
  { __typename?: 'Mutation' }
  & { createUserAnalystSubscriber: (
    { __typename?: 'USER_ANALYST_SUBSCRIBER' }
    & Pick<User_Analyst_Subscriber, 'id'>
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

export type FindActiveCountriesQueryVariables = Exact<{
  status: Scalars['Boolean'];
}>;


export type FindActiveCountriesQuery = (
  { __typename?: 'Query' }
  & { findCountriesByStatus: Array<(
    { __typename?: 'COUNTRY' }
    & Pick<Country, 'id' | 'name'>
  )> }
);

export type TopSponsoredFeedsQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type TopSponsoredFeedsQuery = (
  { __typename?: 'Query' }
  & { topSponsoredFeeds: Array<(
    { __typename?: 'FEED' }
    & Pick<Feed, 'id' | 'title' | 'body' | 'accessLevel' | 'imageUrl' | 'categoryTag'>
    & { user: (
      { __typename?: 'USER' }
      & Pick<User, 'firstName' | 'lastName' | 'id' | 'profileImageUrl'>
    ) }
  )> }
);

export type FindFeedCreatedByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindFeedCreatedByUserQuery = (
  { __typename?: 'Query' }
  & { findFeedByUserId: Array<(
    { __typename?: 'FEED' }
    & Pick<Feed, 'id' | 'title' | 'dateCreated'>
    & { subscriptionPackage?: Maybe<(
      { __typename?: 'SUBSCRIPTION_PACKAGE' }
      & Pick<Subscription_Package, 'id' | 'name'>
    )> }
  )> }
);

export type FindFeedByIdQueryVariables = Exact<{
  feedId: Scalars['String'];
}>;


export type FindFeedByIdQuery = (
  { __typename?: 'Query' }
  & { findFeedById: (
    { __typename?: 'FEED' }
    & Pick<Feed, 'id' | 'title' | 'body' | 'categoryTag' | 'accessLevel' | 'imageUrl' | 'dateCreated'>
    & { subscriptionPackage?: Maybe<(
      { __typename?: 'SUBSCRIPTION_PACKAGE' }
      & Pick<Subscription_Package, 'id' | 'name'>
    )> }
  ) }
);

export type FindSubscriptionPackagesByCurrentUserIdQueryVariables = Exact<{ [key: string]: never; }>;


export type FindSubscriptionPackagesByCurrentUserIdQuery = (
  { __typename?: 'Query' }
  & { findSubscriptionPackagesByCurrentUserId: Array<(
    { __typename?: 'SUBSCRIPTION_PACKAGE' }
    & Pick<Subscription_Package, 'id' | 'name' | 'duration' | 'price' | 'description'>
  )> }
);

export type FindSubscriptionPackageByIdQueryVariables = Exact<{
  payload: Scalars['String'];
}>;


export type FindSubscriptionPackageByIdQuery = (
  { __typename?: 'Query' }
  & { findSubscriptionPackageById: (
    { __typename?: 'SUBSCRIPTION_PACKAGE' }
    & Pick<Subscription_Package, 'id' | 'name' | 'duration' | 'price' | 'description'>
  ) }
);

export type FindFeedItemByIdQueryVariables = Exact<{
  feedId: Scalars['String'];
}>;


export type FindFeedItemByIdQuery = (
  { __typename?: 'Query' }
  & { findFeedById: (
    { __typename?: 'FEED' }
    & Pick<Feed, 'id' | 'title' | 'categoryTag' | 'body' | 'imageUrl' | 'dateCreated'>
    & { likesForThisFeed: Array<(
      { __typename?: 'FEED_LIKE' }
      & Pick<Feed_Like, 'id'>
      & { user: (
        { __typename?: 'USER' }
        & Pick<User, 'id'>
      ) }
    )>, user: (
      { __typename?: 'USER' }
      & Pick<User, 'id' | 'firstName' | 'lastName' | 'profileImageUrl'>
    ), commentsForThisFeed: Array<(
      { __typename?: 'FEED_COMMENT' }
      & Pick<Feed_Comment, 'id' | 'body' | 'dateCreated'>
      & { user: (
        { __typename?: 'USER' }
        & Pick<User, 'id' | 'firstName' | 'lastName' | 'profileImageUrl'>
      ), repliesForThisComment: Array<(
        { __typename?: 'FEED_COMMENT_REPLY' }
        & Pick<Feed_Comment_Reply, 'id' | 'body'>
        & { user: (
          { __typename?: 'USER' }
          & Pick<User, 'id' | 'firstName' | 'lastName' | 'profileImageUrl'>
        ) }
      )> }
    )> }
  ) }
);

export type FindFeedCommentbyIdQueryVariables = Exact<{
  feedCommentId: Scalars['String'];
}>;


export type FindFeedCommentbyIdQuery = (
  { __typename?: 'Query' }
  & { findFeedCommentsById: (
    { __typename?: 'FEED_COMMENT' }
    & Pick<Feed_Comment, 'id' | 'body' | 'dateCreated'>
    & { feed: (
      { __typename?: 'FEED' }
      & Pick<Feed, 'id'>
    ), user: (
      { __typename?: 'USER' }
      & Pick<User, 'id' | 'firstName' | 'lastName' | 'profileImageUrl'>
    ), repliesForThisComment: Array<(
      { __typename?: 'FEED_COMMENT_REPLY' }
      & Pick<Feed_Comment_Reply, 'id' | 'body'>
      & { user: (
        { __typename?: 'USER' }
        & Pick<User, 'id' | 'firstName' | 'lastName' | 'profileImageUrl'>
      ) }
    )> }
  ) }
);

export type FindFeedLikeByIdQueryVariables = Exact<{
  feedLikeId: Scalars['String'];
}>;


export type FindFeedLikeByIdQuery = (
  { __typename?: 'Query' }
  & { findLikeById: (
    { __typename?: 'FEED_LIKE' }
    & Pick<Feed_Like, 'id'>
    & { feed: (
      { __typename?: 'FEED' }
      & Pick<Feed, 'id'>
    ), user: (
      { __typename?: 'USER' }
      & Pick<User, 'id'>
    ) }
  ) }
);

export type UserDashboardStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserDashboardStatsQuery = (
  { __typename?: 'Query' }
  & { userDashboardStats: Array<(
    { __typename?: 'StatisticsDTO' }
    & Pick<StatisticsDto, 'key' | 'value'>
  )> }
);

export type MyFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type MyFeedQuery = (
  { __typename?: 'Query' }
  & { myFeed: Array<(
    { __typename?: 'FEED' }
    & Pick<Feed, 'id' | 'title' | 'categoryTag' | 'body' | 'imageUrl' | 'dateCreated'>
    & { likesForThisFeed: Array<(
      { __typename?: 'FEED_LIKE' }
      & Pick<Feed_Like, 'id'>
      & { feed: (
        { __typename?: 'FEED' }
        & Pick<Feed, 'id'>
      ), user: (
        { __typename?: 'USER' }
        & Pick<User, 'id'>
      ) }
    )>, user: (
      { __typename?: 'USER' }
      & Pick<User, 'id' | 'firstName' | 'lastName' | 'profileImageUrl'>
    ), commentsForThisFeed: Array<(
      { __typename?: 'FEED_COMMENT' }
      & Pick<Feed_Comment, 'id' | 'body' | 'dateCreated'>
      & { feed: (
        { __typename?: 'FEED' }
        & Pick<Feed, 'id'>
      ), user: (
        { __typename?: 'USER' }
        & Pick<User, 'id' | 'firstName' | 'lastName' | 'profileImageUrl'>
      ), repliesForThisComment: Array<(
        { __typename?: 'FEED_COMMENT_REPLY' }
        & Pick<Feed_Comment_Reply, 'id' | 'body'>
        & { user: (
          { __typename?: 'USER' }
          & Pick<User, 'id' | 'firstName' | 'lastName' | 'profileImageUrl'>
        ) }
      )> }
    )> }
  )> }
);

export type FindFeedByUserIdQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type FindFeedByUserIdQuery = (
  { __typename?: 'Query' }
  & { findFeedByCreatedUser: Array<(
    { __typename?: 'FEED' }
    & Pick<Feed, 'id' | 'title' | 'categoryTag' | 'body' | 'imageUrl' | 'dateCreated'>
    & { likesForThisFeed: Array<(
      { __typename?: 'FEED_LIKE' }
      & Pick<Feed_Like, 'id'>
      & { feed: (
        { __typename?: 'FEED' }
        & Pick<Feed, 'id'>
      ), user: (
        { __typename?: 'USER' }
        & Pick<User, 'id'>
      ) }
    )>, user: (
      { __typename?: 'USER' }
      & Pick<User, 'id' | 'firstName' | 'lastName' | 'profileImageUrl'>
    ), commentsForThisFeed: Array<(
      { __typename?: 'FEED_COMMENT' }
      & Pick<Feed_Comment, 'id' | 'body' | 'dateCreated'>
      & { feed: (
        { __typename?: 'FEED' }
        & Pick<Feed, 'id'>
      ), user: (
        { __typename?: 'USER' }
        & Pick<User, 'id' | 'firstName' | 'lastName' | 'profileImageUrl'>
      ), repliesForThisComment: Array<(
        { __typename?: 'FEED_COMMENT_REPLY' }
        & Pick<Feed_Comment_Reply, 'id' | 'body'>
        & { user: (
          { __typename?: 'USER' }
          & Pick<User, 'id' | 'firstName' | 'lastName' | 'profileImageUrl'>
        ) }
      )> }
    )> }
  )> }
);

export type FindUserAnalystWithUserIdQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type FindUserAnalystWithUserIdQuery = (
  { __typename?: 'Query' }
  & { findUserAnalystWithUserId: (
    { __typename?: 'USER_ANALYST' }
    & Pick<User_Analyst, 'id' | 'bio'>
    & { user: (
      { __typename?: 'USER' }
      & Pick<User, 'profileImageUrl' | 'firstName' | 'lastName' | 'id'>
      & { feedsCreatedByThisUser: Array<(
        { __typename?: 'FEED' }
        & Pick<Feed, 'id'>
      )> }
    ), subscribedUsersToThisAnalyst: Array<(
      { __typename?: 'USER_ANALYST_SUBSCRIBER' }
      & Pick<User_Analyst_Subscriber, 'id'>
      & { user: (
        { __typename?: 'USER' }
        & Pick<User, 'id'>
      ) }
    )> }
  ) }
);

export type FindAnalystsIFollowQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAnalystsIFollowQuery = (
  { __typename?: 'Query' }
  & { findAnalystsUserIsSubscribedTo: Array<(
    { __typename?: 'USER_ANALYST_SUBSCRIBER' }
    & Pick<User_Analyst_Subscriber, 'id'>
    & { user: (
      { __typename?: 'USER' }
      & Pick<User, 'id' | 'firstName' | 'lastName'>
    ), userAnalyst: (
      { __typename?: 'USER_ANALYST' }
      & { user: (
        { __typename?: 'USER' }
        & Pick<User, 'id' | 'firstName' | 'lastName'>
      ) }
    ) }
  )> }
);

export type FindRecommendedAnalystsQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type FindRecommendedAnalystsQuery = (
  { __typename?: 'Query' }
  & { findRecommendedAnalysts: Array<(
    { __typename?: 'USER_ANALYST' }
    & Pick<User_Analyst, 'id'>
    & { user: (
      { __typename?: 'USER' }
      & Pick<User, 'firstName' | 'lastName' | 'profileImageUrl'>
    ) }
  )> }
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
    dateCreated
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
export const SignUpDocument = gql`
    mutation signUp($payload: CreateUserDTO!) {
  createUser(payload: $payload) {
    id
    role
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SignUpGQL extends Apollo.Mutation<SignUpMutation, SignUpMutationVariables> {
    document = SignUpDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const VerifyAccountDocument = gql`
    mutation verifyAccount($verificationToken: String!) {
  verifyAccount(accountVerificationToken: $verificationToken) {
    message
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class VerifyAccountGQL extends Apollo.Mutation<VerifyAccountMutation, VerifyAccountMutationVariables> {
    document = VerifyAccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ForgotPasswordDocument = gql`
    mutation forgotPassword($email: String!) {
  forgotPassword(email: $email) {
    message
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ForgotPasswordGQL extends Apollo.Mutation<ForgotPasswordMutation, ForgotPasswordMutationVariables> {
    document = ForgotPasswordDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ChangePasswordDocument = gql`
    mutation changePassword($payload: ChangePasswordDTO!) {
  changePassword(payload: $payload) {
    message
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChangePasswordGQL extends Apollo.Mutation<ChangePasswordMutation, ChangePasswordMutationVariables> {
    document = ChangePasswordDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteFeedDocument = gql`
    mutation deleteFeed($feedId: String!) {
  deleteFeed(feedId: $feedId) {
    message
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteFeedGQL extends Apollo.Mutation<DeleteFeedMutation, DeleteFeedMutationVariables> {
    document = DeleteFeedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateFeedDocument = gql`
    mutation createFeed($payload: CreateFeedDTO!) {
  createFeed(payload: $payload) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateFeedGQL extends Apollo.Mutation<CreateFeedMutation, CreateFeedMutationVariables> {
    document = CreateFeedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateFeedDocument = gql`
    mutation updateFeed($payload: UpdateFeedDTO!) {
  updateFeed(payload: $payload) {
    message
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateFeedGQL extends Apollo.Mutation<UpdateFeedMutation, UpdateFeedMutationVariables> {
    document = UpdateFeedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateAnalystDocument = gql`
    mutation createAnalyst($payload: CreateUserAnalystDTO!) {
  createUserAnalyst(payload: $payload) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateAnalystGQL extends Apollo.Mutation<CreateAnalystMutation, CreateAnalystMutationVariables> {
    document = CreateAnalystDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateSubscriptionPackageDocument = gql`
    mutation createSubscriptionPackage($payload: CreateSubscriptionPackageDTO!) {
  createSubscriptionPackage(payload: $payload) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateSubscriptionPackageGQL extends Apollo.Mutation<CreateSubscriptionPackageMutation, CreateSubscriptionPackageMutationVariables> {
    document = CreateSubscriptionPackageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateSubscriptionPackageDocument = gql`
    mutation updateSubscriptionPackage($payload: UpdateSubscriptionPackageDTO!) {
  updateSubscriptionPackage(payload: $payload) {
    message
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateSubscriptionPackageGQL extends Apollo.Mutation<UpdateSubscriptionPackageMutation, UpdateSubscriptionPackageMutationVariables> {
    document = UpdateSubscriptionPackageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MakeFeedCommentDocument = gql`
    mutation makeFeedComment($payload: CreateFeedCommentDTO!) {
  createFeedComment(payload: $payload) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MakeFeedCommentGQL extends Apollo.Mutation<MakeFeedCommentMutation, MakeFeedCommentMutationVariables> {
    document = MakeFeedCommentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LikeFeedDocument = gql`
    mutation likeFeed($feedId: String!) {
  createLike(feedId: $feedId) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LikeFeedGQL extends Apollo.Mutation<LikeFeedMutation, LikeFeedMutationVariables> {
    document = LikeFeedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateAnalystSubscriberDocument = gql`
    mutation createAnalystSubscriber($userAnalystId: String!) {
  createUserAnalystSubscriber(userAnalystId: $userAnalystId) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateAnalystSubscriberGQL extends Apollo.Mutation<CreateAnalystSubscriberMutation, CreateAnalystSubscriberMutationVariables> {
    document = CreateAnalystSubscriberDocument;
    
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
export const FindActiveCountriesDocument = gql`
    query findActiveCountries($status: Boolean!) {
  findCountriesByStatus(status: $status) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindActiveCountriesGQL extends Apollo.Query<FindActiveCountriesQuery, FindActiveCountriesQueryVariables> {
    document = FindActiveCountriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TopSponsoredFeedsDocument = gql`
    query topSponsoredFeeds($limit: Int!) {
  topSponsoredFeeds(limit: $limit) {
    id
    title
    body
    accessLevel
    imageUrl
    categoryTag
    user {
      firstName
      lastName
      id
      profileImageUrl
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TopSponsoredFeedsGQL extends Apollo.Query<TopSponsoredFeedsQuery, TopSponsoredFeedsQueryVariables> {
    document = TopSponsoredFeedsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindFeedCreatedByUserDocument = gql`
    query findFeedCreatedByUser {
  findFeedByUserId {
    id
    title
    subscriptionPackage {
      id
      name
    }
    dateCreated
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindFeedCreatedByUserGQL extends Apollo.Query<FindFeedCreatedByUserQuery, FindFeedCreatedByUserQueryVariables> {
    document = FindFeedCreatedByUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindFeedByIdDocument = gql`
    query findFeedById($feedId: String!) {
  findFeedById(feedId: $feedId) {
    id
    title
    body
    categoryTag
    accessLevel
    imageUrl
    subscriptionPackage {
      id
      name
    }
    dateCreated
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindFeedByIdGQL extends Apollo.Query<FindFeedByIdQuery, FindFeedByIdQueryVariables> {
    document = FindFeedByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindSubscriptionPackagesByCurrentUserIdDocument = gql`
    query findSubscriptionPackagesByCurrentUserId {
  findSubscriptionPackagesByCurrentUserId {
    id
    name
    duration
    price
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindSubscriptionPackagesByCurrentUserIdGQL extends Apollo.Query<FindSubscriptionPackagesByCurrentUserIdQuery, FindSubscriptionPackagesByCurrentUserIdQueryVariables> {
    document = FindSubscriptionPackagesByCurrentUserIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindSubscriptionPackageByIdDocument = gql`
    query findSubscriptionPackageById($payload: String!) {
  findSubscriptionPackageById(packageId: $payload) {
    id
    name
    duration
    price
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindSubscriptionPackageByIdGQL extends Apollo.Query<FindSubscriptionPackageByIdQuery, FindSubscriptionPackageByIdQueryVariables> {
    document = FindSubscriptionPackageByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindFeedItemByIdDocument = gql`
    query findFeedItemById($feedId: String!) {
  findFeedById(feedId: $feedId) {
    id
    title
    categoryTag
    body
    imageUrl
    dateCreated
    likesForThisFeed {
      id
      user {
        id
      }
    }
    user {
      id
      firstName
      lastName
      profileImageUrl
    }
    commentsForThisFeed {
      id
      body
      dateCreated
      user {
        id
        firstName
        lastName
        profileImageUrl
      }
      repliesForThisComment {
        id
        body
        user {
          id
          firstName
          lastName
          profileImageUrl
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindFeedItemByIdGQL extends Apollo.Query<FindFeedItemByIdQuery, FindFeedItemByIdQueryVariables> {
    document = FindFeedItemByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindFeedCommentbyIdDocument = gql`
    query findFeedCommentbyId($feedCommentId: String!) {
  findFeedCommentsById(feedCommentId: $feedCommentId) {
    id
    body
    dateCreated
    feed {
      id
    }
    user {
      id
      firstName
      lastName
      profileImageUrl
    }
    repliesForThisComment {
      id
      body
      user {
        id
        firstName
        lastName
        profileImageUrl
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindFeedCommentbyIdGQL extends Apollo.Query<FindFeedCommentbyIdQuery, FindFeedCommentbyIdQueryVariables> {
    document = FindFeedCommentbyIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindFeedLikeByIdDocument = gql`
    query findFeedLikeById($feedLikeId: String!) {
  findLikeById(feedLikeId: $feedLikeId) {
    id
    feed {
      id
    }
    user {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindFeedLikeByIdGQL extends Apollo.Query<FindFeedLikeByIdQuery, FindFeedLikeByIdQueryVariables> {
    document = FindFeedLikeByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserDashboardStatsDocument = gql`
    query userDashboardStats {
  userDashboardStats {
    key
    value
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserDashboardStatsGQL extends Apollo.Query<UserDashboardStatsQuery, UserDashboardStatsQueryVariables> {
    document = UserDashboardStatsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MyFeedDocument = gql`
    query myFeed {
  myFeed {
    id
    title
    categoryTag
    body
    imageUrl
    dateCreated
    likesForThisFeed {
      id
      feed {
        id
      }
      user {
        id
      }
    }
    user {
      id
      firstName
      lastName
      profileImageUrl
    }
    commentsForThisFeed {
      id
      body
      dateCreated
      feed {
        id
      }
      user {
        id
        firstName
        lastName
        profileImageUrl
      }
      repliesForThisComment {
        id
        body
        user {
          id
          firstName
          lastName
          profileImageUrl
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MyFeedGQL extends Apollo.Query<MyFeedQuery, MyFeedQueryVariables> {
    document = MyFeedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindFeedByUserIdDocument = gql`
    query findFeedByUserId($userId: String!) {
  findFeedByCreatedUser(userId: $userId) {
    id
    title
    categoryTag
    body
    imageUrl
    dateCreated
    likesForThisFeed {
      id
      feed {
        id
      }
      user {
        id
      }
    }
    user {
      id
      firstName
      lastName
      profileImageUrl
    }
    commentsForThisFeed {
      id
      body
      dateCreated
      feed {
        id
      }
      user {
        id
        firstName
        lastName
        profileImageUrl
      }
      repliesForThisComment {
        id
        body
        user {
          id
          firstName
          lastName
          profileImageUrl
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindFeedByUserIdGQL extends Apollo.Query<FindFeedByUserIdQuery, FindFeedByUserIdQueryVariables> {
    document = FindFeedByUserIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindUserAnalystWithUserIdDocument = gql`
    query findUserAnalystWithUserId($userId: String!) {
  findUserAnalystWithUserId(userId: $userId) {
    user {
      profileImageUrl
      firstName
      lastName
      id
      feedsCreatedByThisUser {
        id
      }
    }
    id
    bio
    subscribedUsersToThisAnalyst {
      id
      user {
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindUserAnalystWithUserIdGQL extends Apollo.Query<FindUserAnalystWithUserIdQuery, FindUserAnalystWithUserIdQueryVariables> {
    document = FindUserAnalystWithUserIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindAnalystsIFollowDocument = gql`
    query findAnalystsIFollow {
  findAnalystsUserIsSubscribedTo {
    id
    user {
      id
      firstName
      lastName
    }
    userAnalyst {
      user {
        id
        firstName
        lastName
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FindAnalystsIFollowGQL extends Apollo.Query<FindAnalystsIFollowQuery, FindAnalystsIFollowQueryVariables> {
    document = FindAnalystsIFollowDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindRecommendedAnalystsDocument = gql`
    query findRecommendedAnalysts($limit: Int!) {
  findRecommendedAnalysts(limit: $limit) {
    id
    user {
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
  export class FindRecommendedAnalystsGQL extends Apollo.Query<FindRecommendedAnalystsQuery, FindRecommendedAnalystsQueryVariables> {
    document = FindRecommendedAnalystsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }