import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { NoContentComponent } from './components/no-content/no-content.component';

@NgModule({
  declarations: [
    LoadingComponent,
    NoContentComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [LoadingComponent, NoContentComponent]
})
export class SharedModule { }
