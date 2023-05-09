import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFormRoutingModule } from './angular-form-routing.module';
import { AngularFormComponent } from './angular-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AngularFormComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent
  ],
    imports: [
        CommonModule,
        AngularFormRoutingModule,
        FormsModule
    ]
})
export class AngularFormModule { }
