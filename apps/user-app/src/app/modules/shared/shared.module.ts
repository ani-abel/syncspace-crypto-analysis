import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarToggleDirective } from './directives/navbar-toggle.directive';
import { ThemeToggleDirective } from './directives/theme-toggle.directive';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarToggleDirective,
    ThemeToggleDirective,
    ThemeToggleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarToggleDirective,
    ThemeToggleDirective,
    ThemeToggleComponent,
    RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
