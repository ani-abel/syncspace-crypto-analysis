import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPackageSubscribersComponent } from './view-package-subscribers.component';

const routes: Routes = [{ path: '', component: ViewPackageSubscribersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPackageSubscribersRoutingModule { }
