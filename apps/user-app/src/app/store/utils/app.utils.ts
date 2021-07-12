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
   feeds: Partial<Feed | any>[],
    comment: Feed_Comment | any
): Partial<Feed>[] => {
    if (feeds.length > 0) {
        const feedToUpdate = feeds.findIndex((feed) => feed.id === comment.feed.id);
        if (feedToUpdate !== -1) {
             // ? make a clone of the object, which allows its fields to become writable
             const feedsClone = feeds.slice();
             
             feedsClone[feedToUpdate] = {
                ...feedsClone[feedToUpdate],
                commentsForThisFeed: [
                    ...feeds[feedToUpdate].commentsForThisFeed,
                    comment,
                ]
             }
            return feedsClone;
        }
    }
    return feeds;
}

export const updateFeedWithNewLike = (
    feeds: Partial<Feed>[],
    like: Feed_Like | any
): Partial<Feed>[] => {
    if (feeds.length > 0) {
        const feedToUpdate = feeds.findIndex((feed) => feed.id === like.feed.id);
        if (feedToUpdate !== -1) {
            // ? make a clone of the object, which allows its fields to become writable
            const feedsClone = feeds.slice();

            feedsClone[feedToUpdate] = {
                ...feeds[feedToUpdate],
                likesForThisFeed: [
                    ...feeds[feedToUpdate].likesForThisFeed,
                   like
                ]
            };
            return feedsClone;
        }
    }
    return feeds;
}