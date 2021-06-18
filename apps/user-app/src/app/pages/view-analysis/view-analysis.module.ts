import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewAnalysisRoutingModule } from './view-analysis-routing.module';
import { ViewAnalysisComponent } from './view-analysis.component';


@NgModule({
  declarations: [
    ViewAnalysisComponent
  ],
  imports: [
    CommonModule,
    ViewAnalysisRoutingModule
  ]
})
export class ViewAnalysisModule { }
