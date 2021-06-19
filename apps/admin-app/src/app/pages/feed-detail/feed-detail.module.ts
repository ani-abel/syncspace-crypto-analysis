import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';

import { FeedDetailRoutingModule } from './feed-detail-routing.module';
import { FeedDetailComponent } from './feed-detail.component';


@NgModule({
  declarations: [
    FeedDetailComponent
  ],
  imports: [
    CommonModule,
    SharedFrontendModule,
    FeedDetailRoutingModule
  ]
})
export class FeedDetailModule { }
