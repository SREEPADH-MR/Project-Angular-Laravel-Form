import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './modules/reactive-forms/components/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './modules/template-driven-forms/components/template-driven-forms/template-driven-forms.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
