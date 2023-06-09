import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { DataBindingComponent } from './data-binding.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DataBindingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataBindingRoutingModule,
  ]
})
export class DataBindingModule { }
