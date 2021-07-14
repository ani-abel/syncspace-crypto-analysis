import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialForcastDetailRoutingModule } from './financial-forcast-detail-routing.module';
import { FinancialForcastDetailComponent } from './financial-forcast-detail.component';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
  declarations: [
    FinancialForcastDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FinancialForcastDetailRoutingModule
  ]
})
export class FinancialForcastDetailModule { }
