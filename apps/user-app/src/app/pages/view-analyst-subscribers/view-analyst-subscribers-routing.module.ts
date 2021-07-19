import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAnalystSubscribersComponent } from './view-analyst-subscribers.component';

const routes: Routes = [{ path: '', component: ViewAnalystSubscribersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewAnalystSubscribersRoutingModule { }
