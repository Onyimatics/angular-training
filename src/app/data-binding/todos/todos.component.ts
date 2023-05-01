import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo} from "../../models/todo";
import {Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {

  public todos: Todo[] = [];
  public todos$: Observable<Todo[]> = of([]);

  constructor(
    private todoService: TodoService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    /*this.todoService.fetchAllTodos()
      .subscribe(res => {
        this.todos = res
        console.log(`List of todos`, res);
      });*/

    this.todos$ = this.todoService.fetchAllTodos();
  }

  deleteTodo(todo: Todo) {
    console.log(`list of todos to delete >>>`, todo)
    /*this.todoService.deleteTodo(todo)
      .subscribe(res => {
        console.log(`response from delete >>>`, res);
      });*/
  }

  ngOnDestroy(): void {

  }

  backToHome() {
    this.router.navigateByUrl('/home');
  }

  // Use todoId initially
  viewTodo(todo: Todo) {
    this.router.navigate([`data-binding/todos/${todo.id}`], {
      queryParams: {
        userId: todo.userId,
        completed: todo.completed
      }
    })
      .then((error) => console.log(error));
  }
}
