import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSubscriptionComponent } from './edit-subscription.component';

const routes: Routes = [{ path: '', component: EditSubscriptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSubscriptionRoutingModule { }
