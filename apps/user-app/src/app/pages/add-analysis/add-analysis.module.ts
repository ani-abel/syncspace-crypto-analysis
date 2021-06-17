import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';

import { AddAnalysisRoutingModule } from './add-analysis-routing.module';
import { AddAnalysisComponent } from './add-analysis.component';


@NgModule({
  declarations: [
    AddAnalysisComponent
  ],
  imports: [
    CommonModule,
    SharedFrontendModule,
    AddAnalysisRoutingModule
  ]
})
export class AddAnalysisModule { }
