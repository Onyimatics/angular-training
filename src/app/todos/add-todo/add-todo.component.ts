import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../../models/todo";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {

  @Input()
  todo: Todo = {
    id: 1,
    userId: 1,
    title: 'Routing and Navigation',
    completed: true
  }

  @Output()
  newTodoEvent = new EventEmitter<string>();

  addNewTodo(value: string) {
    console.log('new todo', value)
    this.newTodoEvent.emit(value);
  }
}
