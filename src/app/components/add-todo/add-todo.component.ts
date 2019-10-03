import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Input() todo: Todo;
  @Output() addTodo:EventEmitter<any> = new EventEmitter();

  title:string;

  constructor() { }

  ngOnInit() {
  }

  // Add todo submit
  onSubmit() {
    const todo = {
      id: JSON.parse(localStorage.getItem('todoItems')).length > 0 ? (JSON.parse(localStorage.getItem('todoItems')).sort().reverse()[0].id + 1) : 1,
      title: this.title,
      completed: false,
    };

    console.log(todo);


    this.addTodo.emit(todo);
  }
}
