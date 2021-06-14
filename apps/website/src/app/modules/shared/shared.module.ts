import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeToggleDirective } from './directives/theme-toggle.directive';
import { NavbarToggleDirective } from './directives/navbar-toggle.directive';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    FooterComponent,
    ThemeToggleDirective,
    NavbarToggleDirective,
    NavSidebarComponent,
    ThemeToggleComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ThemeToggleDirective,
    NavbarToggleDirective,
    ThemeToggleComponent,
    IonicModule,
    FooterComponent,
    NavSidebarComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
