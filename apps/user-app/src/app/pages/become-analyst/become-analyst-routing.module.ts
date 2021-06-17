import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BecomeAnalystComponent } from './become-analyst.component';

const routes: Routes = [{ path: '', component: BecomeAnalystComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BecomeAnalystRoutingModule { }
