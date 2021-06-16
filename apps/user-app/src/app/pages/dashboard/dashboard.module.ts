import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedFrontendModule
  ]
})
export class DashboardModule { }
