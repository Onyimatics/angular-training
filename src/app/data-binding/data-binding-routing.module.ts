import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding.component';
import {TodosComponent} from "../todos/todos.component";
import {TodoDetailComponent} from "../todos/todo-detail/todo-detail.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DataBindingComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataBindingRoutingModule { }
