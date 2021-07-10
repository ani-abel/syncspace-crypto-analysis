/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, Input } from '@angular/core';
import { Feed_Comment } from '@syncspace-crypto-analysis/graphql-config';

@Component({
  selector: 'syncspace-crypto-analysis-feed-comment',
  templateUrl: './feed-comment.component.html',
  styleUrls: ['./feed-comment.component.scss']
})
export class FeedCommentComponent implements OnInit {
  @Input() feedComment: Feed_Comment;

  ngOnInit(): void { }

}
