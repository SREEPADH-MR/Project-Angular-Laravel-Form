import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormsModule } from './modules/template-driven-forms/template-driven-forms.module';
import { ModelDrivenFormsModule } from './modules/model-driven-forms/model-driven-forms.module';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TemplateDrivenFormsModule,
    ModelDrivenFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
