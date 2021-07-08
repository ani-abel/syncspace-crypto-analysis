import { NgModule } from '@angular/core';
import { 
  PreloadAllModules, 
  RouterModule, 
  Routes 
} from '@angular/router';
import { AppRole } from '@syncspace-crypto-analysis/graphql-config';
import { RoleGuard } from '@syncspace-crypto-analysis/shared-frontend';
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
    path: 'change-password', 
    loadChildren: () => import('./pages/change-password/change-password.module').then(m => m.ChangePasswordModule) 
  },
  {
    path: 'verify-account',
    loadChildren: () => import('./pages/verify-account/verify-account-routing.module').then(m => m.VerifyAccountRoutingModule),
  },
  {
    path: 'auth',
    canActivate: [RoleGuard],
    data: { roles: [AppRole.Admin, AppRole.Trader] },
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
        path: 'analysis-feed', 
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadChildren: () => import('./pages/analysis-feed/analysis-feed.module').then(m => m.AnalysisFeedModule),

          },
          {
            path: ':feedId',
            loadChildren: () => import('./pages/feed-detail/feed-detail.module').then(m => m.FeedDetailModule)
          }
        ]
      },
      { 
        path: 'user-feed/:userId', 
        loadChildren: () => import('./pages/user-feed/user-feed.module').then(m => m.UserFeedModule) 
      },
      { 
        path: 'become-analyst', 
        loadChildren: () => import('./pages/become-analyst/become-analyst.module').then(m => m.BecomeAnalystModule) 
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
        path: 'payment', 
        loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentModule) 
      },
      {
        path: 'subscription',
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadChildren: () => import('./pages/view-subscription/view-subscription.module').then(m => m.ViewSubscriptionModule)
          },
          { 
            path: 'add', 
            loadChildren: () => import('./pages/add-subscription/add-subscription.module').then(m => m.AddSubscriptionModule) 
          },
          { 
            path: 'edit', 
            loadChildren: () => import('./pages/edit-subscription/edit-subscription.module').then(m => m.EditSubscriptionModule) 
          },
        ],
      },
      {
        path: 'analysis',
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadChildren: () => import('./pages/view-analysis/view-analysis.module').then(m => m.ViewAnalysisModule)
          },
          { 
            path: 'add', 
            loadChildren: () => import('./pages/add-analysis/add-analysis.module').then(m => m.AddAnalysisModule) 
          },
          {
            path: 'edit/:feedId',
            loadChildren: () => import('./pages/edit-analysis/edit-analysis.module').then(m => m.EditAnalysisModule)
          }
        ]
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
