import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { DataBindingComponent } from './data-binding.component';
import { TodosComponent } from './todos/todos.component';
import {FormsModule} from "@angular/forms";
import { TodoDetailComponent } from './todo-detail/todo-detail.component';


@NgModule({
  declarations: [
    DataBindingComponent,
    TodosComponent,
    TodoDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataBindingRoutingModule,
  ]
})
export class DataBindingModule { }
