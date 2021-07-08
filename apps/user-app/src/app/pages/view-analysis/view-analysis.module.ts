import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewAnalysisRoutingModule } from './view-analysis-routing.module';
import { ViewAnalysisComponent } from './view-analysis.component';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';

@NgModule({
  declarations: [
    ViewAnalysisComponent
  ],
  imports: [
    CommonModule,
    SharedFrontendModule,
    ViewAnalysisRoutingModule
  ]
})
export class ViewAnalysisModule { }
