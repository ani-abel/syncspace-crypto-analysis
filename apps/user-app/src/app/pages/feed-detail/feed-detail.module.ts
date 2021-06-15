import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedDetailRoutingModule } from './feed-detail-routing.module';
import { FeedDetailComponent } from './feed-detail.component';


@NgModule({
  declarations: [
    FeedDetailComponent
  ],
  imports: [
    CommonModule,
    FeedDetailRoutingModule
  ]
})
export class FeedDetailModule { }
