import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule, 
    SharedModule, 
    HomePageRoutingModule
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
