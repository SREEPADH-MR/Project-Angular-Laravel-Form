import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateDrivenFormsRoutingModule } from './template-driven-forms-routing.module';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';


@NgModule({
  declarations: [TemplateDrivenFormsComponent],
  imports: [
    FormsModule,
    CommonModule,
    TemplateDrivenFormsRoutingModule
  ]
})
export class TemplateDrivenFormsModule { }
