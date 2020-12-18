import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModelDrivenFormsRoutingModule } from './model-driven-forms-routing.module';
import { ModelDrivenFormsComponent } from './components/model-driven-forms/model-driven-forms.component';
import { ModelDrivenFormsViewComponent } from './components/model-driven-forms-view/model-driven-forms-view.component';


@NgModule({
  declarations: [
    ModelDrivenFormsComponent,
    ModelDrivenFormsViewComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ModelDrivenFormsRoutingModule,
  ]
})
export class ModelDrivenFormsModule { }
