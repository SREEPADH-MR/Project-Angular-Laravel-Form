import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';

const routes: Routes = [
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenFormsRoutingModule { }
