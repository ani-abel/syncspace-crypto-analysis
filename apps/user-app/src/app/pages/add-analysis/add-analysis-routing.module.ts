import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnalysisComponent } from './add-analysis.component';

const routes: Routes = [{ path: '', component: AddAnalysisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddAnalysisRoutingModule { }
