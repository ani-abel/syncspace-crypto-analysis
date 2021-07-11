/* eslint-disable @typescript-eslint/no-explicit-any */
import { Feed_Comment, Feed, Feed_Like } from "@syncspace-crypto-analysis/graphql-config";
import { AppModel } from "../model/app.model";

export const updateFeedItemWithNewComment = (
    state: AppModel, 
    comment:  Partial<Feed_Comment>
): Partial<Feed> => {
    if (state?.selectedFeedItem) {
        const feedItem: Partial<Feed> = {
            ...state.selectedFeedItem,
            commentsForThisFeed: [
                ...state.selectedFeedItem.commentsForThisFeed, 
                comment
            ],
        };
        return feedItem;
    }
    return undefined;
}

export const updateFeedItemWithNewLike = (
    state: AppModel, 
    like:  Partial<Feed_Like>
): Partial<Feed> => {
    if (state?.selectedFeedItem) {
        const feedItem: Partial<Feed> = {
            ...state.selectedFeedItem,
            likesForThisFeed: [
                ...state.selectedFeedItem.likesForThisFeed, 
                like
            ],
        };
        return feedItem;
    }
    return undefined;
}

export const updateFeedWithNewComment = (
    state: AppModel,
    comment: Feed_Comment | any
): Partial<Feed>[] => {
    if (state?.feed.length > 0) {
        const feedToUpdate = state.feed.findIndex((feed) => feed.id === comment.feed.id);
        if (feedToUpdate !== -1) {
            state.feed[feedToUpdate].commentsForThisFeed = [
                ...state.feed[feedToUpdate].commentsForThisFeed,
                comment
            ];
        }
    }
    return state.feed;
}

export const updateFeedWithNewLike = (
    state: AppModel,
    like: Feed_Like | any
): Partial<Feed>[] => {
    if (state?.feed.length > 0) {
        const feedToUpdate = state.feed.findIndex((feed) => feed.id === like.feed.id);
        if (feedToUpdate !== -1) {
            state.feed[feedToUpdate].likesForThisFeed = [
                ...state.feed[feedToUpdate].likesForThisFeed,
                like
            ];
        }
    }
    return state.feed;
}