import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelDrivenFormsRoutingModule } from './model-driven-forms-routing.module';
import { ModelDrivenFormsComponent } from './components/model-driven-forms/model-driven-forms.component';


@NgModule({
  declarations: [ModelDrivenFormsComponent],
  imports: [
    CommonModule,
    ModelDrivenFormsRoutingModule
  ]
})
export class ModelDrivenFormsModule { }
