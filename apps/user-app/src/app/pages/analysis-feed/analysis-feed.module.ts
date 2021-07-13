import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';

import { AnalysisFeedRoutingModule } from './analysis-feed-routing.module';
import { AnalysisFeedComponent } from './analysis-feed.component';
import { SharedModule } from '../../modules/shared/shared.module';


@NgModule({
  declarations: [
    AnalysisFeedComponent
  ],
  imports: [
    CommonModule,
    SharedFrontendModule,
    SharedModule,
    AnalysisFeedRoutingModule
  ]
})
export class AnalysisFeedModule { }
