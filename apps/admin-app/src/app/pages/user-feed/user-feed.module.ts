import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';

import { UserFeedRoutingModule } from './user-feed-routing.module';
import { UserFeedComponent } from './user-feed.component';


@NgModule({
  declarations: [
    UserFeedComponent
  ],
  imports: [
    CommonModule,
    SharedFrontendModule,
    UserFeedRoutingModule
  ]
})
export class UserFeedModule { }
