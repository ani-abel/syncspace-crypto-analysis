import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAnalysisComponent } from './edit-analysis.component';

const routes: Routes = [{ path: '', component: EditAnalysisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditAnalysisRoutingModule { }
