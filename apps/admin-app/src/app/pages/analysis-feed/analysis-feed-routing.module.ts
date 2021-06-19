import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisFeedComponent } from './analysis-feed.component';

const routes: Routes = [{ path: '', component: AnalysisFeedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisFeedRoutingModule { }
