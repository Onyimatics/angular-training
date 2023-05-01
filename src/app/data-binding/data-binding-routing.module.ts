import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding.component';
import {TodosComponent} from "./todos/todos.component";
import {TodoDetailComponent} from "./todo-detail/todo-detail.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DataBindingComponent
      },
      {
        path: 'todos',
        component: TodosComponent
      },
      {
        path: 'todos/:id',
        component: TodoDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataBindingRoutingModule { }
