/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'syncspace-crypto-analysis-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.scss']
})
export class UserProfileCardComponent implements OnInit {
  @Input() canSubscribe: boolean;
  @Input() canEdit: boolean;

  constructor() {}

  ngOnInit(): void {}

}
