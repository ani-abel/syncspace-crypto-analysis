import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { 
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'sign-up', 
    loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule) 
  },
  { 
    path: 'forgot-password', 
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) 
  },
  {
    path: 'auth',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full', 
      },
      { 
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) 
      },
      { 
        path: 'user-feed/:userId', 
        loadChildren: () => import('./pages/user-feed/user-feed.module').then(m => m.UserFeedModule) 
      },
      { 
        path: 'view-analyst-applicants', 
        loadChildren: () => import('./pages/view-analyst-applicants/view-analyst-applicants.module').then(m => m.ViewAnalystApplicantsModule) 
      },
      { 
        path: 'my-profile', 
        loadChildren: () => import('./pages/my-profile/my-profile.module').then(m => m.MyProfileModule) 
      },
      { 
        path: 'edit-profile', 
        loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfileModule) 
      },
      { 
        path: 'statistics', 
        loadChildren: () => import('./pages/statistics/statistics.module').then(m => m.StatisticsModule) 
      },
      {
        path: 'analysis-feed',
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadChildren: () => import('./pages/analysis-feed/analysis-feed.module').then(m => m.AnalysisFeedModule) 
          },
          { 
            path: ':feedId', 
            loadChildren: () => import('./pages/feed-detail/feed-detail.module').then(m => m.FeedDetailModule) 
          },
        ]
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadChildren: () => import('./pages/view-users/view-users.module').then(m => m.ViewUsersModule)
          },
          {
            path: 'add',
            loadChildren: () => import('./pages/add-user/add-user.module').then(m => m.AddUserModule)
          },
          {
            path: 'edit/:userId',
            loadChildren: () => import('./pages/edit-user/edit-user.module').then(m => m.EditUserModule)
          }
        ],
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
