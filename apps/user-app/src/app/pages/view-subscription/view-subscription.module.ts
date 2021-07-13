import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';

import { ViewSubscriptionRoutingModule } from './view-subscription-routing.module';
import { ViewSubscriptionComponent } from './view-subscription.component';
import { SharedModule } from '../../modules/shared/shared.module';


@NgModule({
  declarations: [
    ViewSubscriptionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedFrontendModule,
    ViewSubscriptionRoutingModule
  ]
})
export class ViewSubscriptionModule { }
