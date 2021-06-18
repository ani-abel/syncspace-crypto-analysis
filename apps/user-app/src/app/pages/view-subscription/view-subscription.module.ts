import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewSubscriptionRoutingModule } from './view-subscription-routing.module';
import { ViewSubscriptionComponent } from './view-subscription.component';


@NgModule({
  declarations: [
    ViewSubscriptionComponent
  ],
  imports: [
    CommonModule,
    ViewSubscriptionRoutingModule
  ]
})
export class ViewSubscriptionModule { }
