import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisFeedRoutingModule } from './analysis-feed-routing.module';
import { AnalysisFeedComponent } from './analysis-feed.component';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';


@NgModule({
  declarations: [
    AnalysisFeedComponent
  ],
  imports: [
    CommonModule,
    SharedFrontendModule,
    AnalysisFeedRoutingModule
  ]
})
export class AnalysisFeedModule { }
