import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    // this.todoService.getTodos().subscribe( todos =>{
    //   this.todos = todos;
    // });
    this.todos = this.todoService.getTodos();
    
    
  }

  deleteTodo(todo: Todo){


    // Delete in localStorage
    const todoItems = JSON.parse(localStorage.getItem('todoItems'));

    let todos =  todoItems.filter(todoItem => 
      todoItem.id !== todo.id
    );

    localStorage.setItem("todoItems", JSON.stringify(todos));


    // Delete in UI
    this.todos =  this.todos.filter(todoItem => 
      todoItem.id !== todo.id
    );
    // Delete in Server
    // this.todoService.deleteTodo(todo).subscribe();

  }

  addTodo(todo: Todo){

    // this.todoService.addTodo(todo).subscribe(todo => {
    //   this.todos.push(todo);
    // });

    // Add To Local Storage
    const arr = JSON.parse(localStorage.getItem('todoItems')) || [];
    arr.push(todo);
    localStorage.setItem('todoItems', JSON.stringify(arr));

    // Update UI
    this.todos.push(todo);
  }

}
