import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';

import { ViewAnalystSubscribersRoutingModule } from './view-analyst-subscribers-routing.module';
import { ViewAnalystSubscribersComponent } from './view-analyst-subscribers.component';
import { SharedModule } from '../../modules/shared/shared.module';


@NgModule({
  declarations: [
    ViewAnalystSubscribersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedFrontendModule,
    ViewAnalystSubscribersRoutingModule
  ]
})
export class ViewAnalystSubscribersModule { }
