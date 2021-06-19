import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';

import { ViewAnalystApplicantsRoutingModule } from './view-analyst-applicants-routing.module';
import { ViewAnalystApplicantsComponent } from './view-analyst-applicants.component';


@NgModule({
  declarations: [
    ViewAnalystApplicantsComponent
  ],
  imports: [
    CommonModule,
    SharedFrontendModule,
    ViewAnalystApplicantsRoutingModule
  ]
})
export class ViewAnalystApplicantsModule { }
