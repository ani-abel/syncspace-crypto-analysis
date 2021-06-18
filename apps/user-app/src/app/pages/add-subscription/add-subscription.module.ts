import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';

import { AddSubscriptionRoutingModule } from './add-subscription-routing.module';
import { AddSubscriptionComponent } from './add-subscription.component';


@NgModule({
  declarations: [
    AddSubscriptionComponent
  ],
  imports: [
    CommonModule,
    SharedFrontendModule,
    AddSubscriptionRoutingModule
  ]
})
export class AddSubscriptionModule { }
