import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import { SharedModule } from '../../modules/shared/shared.module';


@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
