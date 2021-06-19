import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';


@NgModule({
  declarations: [
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    SharedFrontendModule,
    EditProfileRoutingModule
  ]
})
export class EditProfileModule { }
