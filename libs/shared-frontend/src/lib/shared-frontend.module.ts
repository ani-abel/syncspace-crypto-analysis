import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarToggleDirective } from './directives/navbar-toggle.directive';
import { ThemeToggleDirective } from './directives/theme-toggle.directive';
import { ToggleDirective } from './directives/toggle.directive';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { FeedWidgetComponent } from './components/feed-widget/feed-widget.component';
import { FeedCommentComponent } from './components/feed-comment/feed-comment.component';

@NgModule({
  declarations: [
    NavbarToggleDirective,
    ThemeToggleDirective,
    ToggleDirective,
    DashboardLayoutComponent,
    ThemeToggleComponent,
    FeedWidgetComponent,
    FeedCommentComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NavbarToggleDirective,
    ThemeToggleDirective,
    ToggleDirective,
    DashboardLayoutComponent,
    ThemeToggleComponent,
    FeedWidgetComponent,
    FeedCommentComponent
  ]
})
export class SharedFrontendModule {}
