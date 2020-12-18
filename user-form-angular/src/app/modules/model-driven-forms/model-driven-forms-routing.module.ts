import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelDrivenFormsComponent } from './components/model-driven-forms/model-driven-forms.component';
import { ModelDrivenFormsViewComponent } from './components/model-driven-forms-view/model-driven-forms-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'model-driven-form',
    pathMatch: 'full'
  },
  {
    path: 'model-driven-form',
    component: ModelDrivenFormsComponent,
  },
  {
    path: 'model-driven-form/read/:userId',
    component: ModelDrivenFormsViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelDrivenFormsRoutingModule { }
