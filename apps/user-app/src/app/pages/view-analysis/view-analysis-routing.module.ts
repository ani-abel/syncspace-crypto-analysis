import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAnalysisComponent } from './view-analysis.component';

const routes: Routes = [{ path: '', component: ViewAnalysisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewAnalysisRoutingModule { }
