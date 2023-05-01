import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Todo} from "../../models/todo";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  public todoId: number | undefined;
  public todo$: Observable<Todo> | undefined;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    const todoId = this.route.snapshot.paramMap.get('id');
    console.log('Activated Route', this.route.snapshot.queryParams)
    if (todoId) {
      this.todo$ = this.todoService.viewTodo(+todoId).pipe(tap((data) => console.log(data)));
    }
  }

}
