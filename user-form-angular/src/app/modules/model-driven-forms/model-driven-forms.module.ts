import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ModelDrivenFormsRoutingModule } from './model-driven-forms-routing.module';
import { ModelDrivenFormsComponent } from './components/model-driven-forms/model-driven-forms.component';


@NgModule({
  declarations: [ModelDrivenFormsComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ModelDrivenFormsRoutingModule,
  ]
})
export class ModelDrivenFormsModule { }
