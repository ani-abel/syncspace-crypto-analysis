import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewSubscriptionRoutingModule } from './view-subscription-routing.module';
import { ViewSubscriptionComponent } from './view-subscription.component';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';


@NgModule({
  declarations: [
    ViewSubscriptionComponent
  ],
  imports: [
    CommonModule,
    SharedFrontendModule,
    ViewSubscriptionRoutingModule
  ]
})
export class ViewSubscriptionModule { }
