import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsComponent } from './modules/reactive-forms/components/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './modules/template-driven-forms/components/template-driven-forms/template-driven-forms.component';

const routes: Routes = [
  {
    path: 'reactive-form',
    component: ReactiveFormsComponent
  },
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
