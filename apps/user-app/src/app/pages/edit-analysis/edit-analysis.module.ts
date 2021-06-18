import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';

import { EditAnalysisRoutingModule } from './edit-analysis-routing.module';
import { EditAnalysisComponent } from './edit-analysis.component';


@NgModule({
  declarations: [
    EditAnalysisComponent
  ],
  imports: [
    CommonModule,
    SharedFrontendModule,
    EditAnalysisRoutingModule
  ]
})
export class EditAnalysisModule { }
