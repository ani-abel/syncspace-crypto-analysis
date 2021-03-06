import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { NavbarToggleDirective } from './directives/navbar-toggle.directive';
import { ThemeToggleDirective } from './directives/theme-toggle.directive';
import { ToggleDirective } from './directives/toggle.directive';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { FeedWidgetComponent } from './components/feed-widget/feed-widget.component';
import { FeedCommentComponent } from './components/feed-comment/feed-comment.component';
import { UserProfileCardComponent } from './components/user-profile-card/user-profile-card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AdminDashboardLayoutComponent } from './components/admin-dashboard-layout/admin-dashboard-layout.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { CachedImageComponent } from './components/cached-image/cached-image.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SliceContentPipe } from './pipes/slice-content.pipe';
import { SummarizeContentPipe } from './pipes/summarize.pipe';

@NgModule({
  declarations: [
    NavbarToggleDirective,
    ThemeToggleDirective,
    ToggleDirective,
    SidebarComponent,
    DashboardLayoutComponent,
    ThemeToggleComponent,
    FeedWidgetComponent,
    FeedCommentComponent,
    UserProfileCardComponent,
    SignUpComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AdminDashboardLayoutComponent,
    AdminSidebarComponent,
    CachedImageComponent,
    CapitalizePipe,
    SliceContentPipe,
    SummarizeContentPipe,
    ImagePreviewComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    VirtualScrollerModule,
  ],
  exports: [
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    VirtualScrollerModule,
    NavbarToggleDirective,
    ThemeToggleDirective,
    ToggleDirective,
    DashboardLayoutComponent,
    ThemeToggleComponent,
    FeedWidgetComponent,
    FeedCommentComponent,
    UserProfileCardComponent,
    SidebarComponent,
    SignUpComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AdminDashboardLayoutComponent,
    ImagePreviewComponent,
    AdminSidebarComponent,
    CachedImageComponent,
    CapitalizePipe,
    SliceContentPipe,
    SummarizeContentPipe,
  ]
})
export class SharedFrontendModule {}
