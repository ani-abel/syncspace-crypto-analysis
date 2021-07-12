/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { User_Analyst } from '@syncspace-crypto-analysis/graphql-config';

@Component({
  selector: 'syncspace-crypto-analysis-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.scss']
})
export class UserProfileCardComponent implements OnInit {
  @Output() subscribe: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() canSubscribe: boolean;
  @Input() canEdit: boolean;
  @Input() analystBio: Partial<User_Analyst>;
  @Input() isSubscriptionComplete: boolean;

  constructor() {}

  ngOnInit(): void { }

  onSubscribe(): void {
    this.subscribe.emit(true);
  }

}
