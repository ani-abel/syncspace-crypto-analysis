import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAnalystApplicantsComponent } from './view-analyst-applicants.component';

const routes: Routes = [{ path: '', component: ViewAnalystApplicantsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewAnalystApplicantsRoutingModule { }
