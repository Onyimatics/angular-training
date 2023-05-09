import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo} from "../models/todo";
import {map, Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {

  public todos: Todo[] = [];
  public todos$: Observable<Todo[]> = of([]);
  public latestTodo: Todo = {
    id: 2,
    userId: 2,
    title: 'Passing Data from Parent To Child',
    completed: true
  }

  constructor(
    private todoService: TodoService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.todoService.fetchAllTodos()
      .subscribe(res => {
        this.todos = res;

        const todo = this.todos.find((todo) => todo.title === 'omnis nulla eum aliquam distinctio');
        console.log('any???', todo)
        if (todo) {
          this.latestTodo = todo;
        }
      });

    this.todos$ = this.todoService.fetchAllTodos().pipe(
      map(todos => todos.filter(todo => todo.userId === 10))
    );
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
    this.router.navigate([`todos/${todo.id}`], {
      queryParams: {
        userId: todo.userId,
        completed: todo.completed
      }
    })
      .then((res) => console.log(res));
  }

  addTodo(newTodoTitle: string) {
    this.todos$.subscribe((todos) => {
      if (todos) {
        const newTodoObj = {
          id: 201,
          userId: 10,
          title: newTodoTitle,
          completed: true,
        }
        // Use push initially
        todos.unshift(newTodoObj);
        this.todos = todos;
        console.log('todos...', this.todos)
      }
    })
  }
}
