import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import {TodosComponent} from "./todos.component";
import {TodoDetailComponent} from "./todo-detail/todo-detail.component";
import {AddTodoComponent} from "./add-todo/add-todo.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TodosComponent,
    TodoDetailComponent,
    AddTodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
