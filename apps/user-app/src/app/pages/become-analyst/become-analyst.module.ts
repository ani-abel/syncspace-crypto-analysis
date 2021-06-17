import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';

import { BecomeAnalystRoutingModule } from './become-analyst-routing.module';
import { BecomeAnalystComponent } from './become-analyst.component';


@NgModule({
  declarations: [
    BecomeAnalystComponent
  ],
  imports: [
    CommonModule,
    SharedFrontendModule,
    BecomeAnalystRoutingModule
  ]
})
export class BecomeAnalystModule { }
