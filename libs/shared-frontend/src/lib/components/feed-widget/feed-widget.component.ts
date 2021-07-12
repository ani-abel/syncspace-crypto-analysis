import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthResponse, Feed, Feed_Like } from '@syncspace-crypto-analysis/graphql-config';
import { getDataFromLocalStorage, LocalStorageKey } from '@syncspace-crypto-analysis/utils';

export type CommentEventType = {
  id: string,
  comment: string;
}

@Component({
  selector: 'syncspace-crypto-analysis-feed-widget',
  templateUrl: './feed-widget.component.html',
  styleUrls: ['./feed-widget.component.scss']
})
export class FeedWidgetComponent implements OnInit {
  @Input() feedItem: Feed;
  @Input() isLast: boolean;
  @Output() like: EventEmitter<string> = new EventEmitter<string>();
  @Output() comment: EventEmitter<CommentEventType> = new EventEmitter<CommentEventType>();
  @Output() commentForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  makeCommentForm: FormGroup;
  userId: string;

  async ngOnInit(): Promise<void> {
    this.initForm();
    const userData = await getDataFromLocalStorage<AuthResponse>(LocalStorageKey.SYNCSPACE_USER);
    if (userData?.userId) {
      this.userId = userData.userId;
    }
  }

  isFeedAlreadyLiked(feedLikes: Partial<Feed_Like>[]): boolean {
    return feedLikes.find((like) => like.user.id === this.userId) ? true :  false;
  }

  initForm(): void {
    this.makeCommentForm = new FormGroup({
      comment: new FormControl(null, Validators.required)
    })
  }

  onLike(feedId: string): void {
    this.like.emit(feedId);
  }

  onSubmit(feedId: string): void {
    if (this.makeCommentForm.invalid) {
      return;
    }
    const { comment } = this.makeCommentForm.value;
    this.comment.emit({ id: feedId, comment });
    this.commentForm.emit(this.makeCommentForm);
  }

}
