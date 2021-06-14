import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialForcastDetailComponent } from './financial-forcast-detail.component';

const routes: Routes = [{ path: '', component: FinancialForcastDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialForcastDetailRoutingModule { }
