import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SharedFrontendModule,
    SignUpRoutingModule
  ]
})
export class SignUpModule { }
