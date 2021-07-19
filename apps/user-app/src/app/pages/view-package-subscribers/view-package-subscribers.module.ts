import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewPackageSubscribersRoutingModule } from './view-package-subscribers-routing.module';
import { ViewPackageSubscribersComponent } from './view-package-subscribers.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';


@NgModule({
  declarations: [
    ViewPackageSubscribersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedFrontendModule,
    ViewPackageSubscribersRoutingModule
  ]
})
export class ViewPackageSubscribersModule { }
