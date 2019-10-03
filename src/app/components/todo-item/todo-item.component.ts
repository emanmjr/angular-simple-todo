import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import { Todo } from 'src/app/models/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  // Set Dynamic Class for line-through
  setLineThroughClass() {
    let setClass = {
      // todo: true,
      'is-complete': this.todo.completed
    }

    return setClass;
  }

  // Toggle Checkbox
  onToggle(todo) { 
    // Toggle done/undone
    todo.completed = !todo.completed;

    // Toggle on localStorage
    // Delete to localStorage
    const todoItems = JSON.parse(localStorage.getItem('todoItems'));

    let todos =  todoItems.filter(todoItem => 
      todoItem.id !== todo.id
    );

    localStorage.setItem("todoItems", JSON.stringify(todos));

    
    // Add again to Local Storage
    const arr = JSON.parse(localStorage.getItem('todoItems')) || [];
    arr.push(todo);
    localStorage.setItem('todoItems', JSON.stringify(arr));
    
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

  checkTodo(todo){
    return todo.completed;
  }

}
