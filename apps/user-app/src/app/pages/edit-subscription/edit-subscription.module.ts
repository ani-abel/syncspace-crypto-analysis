import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditSubscriptionRoutingModule } from './edit-subscription-routing.module';
import { EditSubscriptionComponent } from './edit-subscription.component';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';


@NgModule({
  declarations: [
    EditSubscriptionComponent
  ],
  imports: [
    CommonModule,
    SharedFrontendModule,
    EditSubscriptionRoutingModule
  ]
})
export class EditSubscriptionModule { }
