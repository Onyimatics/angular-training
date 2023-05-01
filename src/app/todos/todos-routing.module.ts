import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoDetailComponent} from "./todo-detail/todo-detail.component";
import {AddTodoComponent} from "./add-todo/add-todo.component";
import {TodosComponent} from "./todos.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TodosComponent,
      },
      {
        path: 'todos/:id',
        component: TodoDetailComponent,
      },
      {
        path: 'add-todo',
        component: AddTodoComponent,
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
