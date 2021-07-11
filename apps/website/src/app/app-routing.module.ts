import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { 
    path: 'privacy', 
    loadChildren: () => import('./pages/privacy/privacy.module').then(m => m.PrivacyModule) 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'contact', 
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) 
  },
  { 
    path: 'faq', 
    loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqModule) 
  },
  { 
    path: 'sign-up', 
    loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule) 
  },
  { 
    path: 'financial-forcast/:feedId',
    loadChildren: () => import('./pages/financial-forcast-detail/financial-forcast-detail.module').then(m => m.FinancialForcastDetailModule) 
  },
  { 
    path: 'forgot-password', 
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
