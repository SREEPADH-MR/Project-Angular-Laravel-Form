import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelDrivenFormsComponent } from './components/model-driven-forms/model-driven-forms.component';

const routes: Routes = [
  {
    path: 'model-driven-form',
    component: ModelDrivenFormsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelDrivenFormsRoutingModule { }
