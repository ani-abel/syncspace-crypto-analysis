import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';

import { ViewAnalysisRoutingModule } from './view-analysis-routing.module';
import { ViewAnalysisComponent } from './view-analysis.component';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
  declarations: [
    ViewAnalysisComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedFrontendModule,
    ViewAnalysisRoutingModule
  ]
})
export class ViewAnalysisModule { }
