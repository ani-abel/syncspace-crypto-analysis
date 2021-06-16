import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import { SharedFrontendModule } from '@syncspace-crypto-analysis/shared-frontend';

@NgModule({
  declarations: [
    FooterComponent,
    NavSidebarComponent,
  ],
  imports: [
    CommonModule,
    SharedFrontendModule,
  ],
  exports: [
    FooterComponent,
    NavSidebarComponent,
    SharedFrontendModule,
  ]
})
export class SharedModule { }
