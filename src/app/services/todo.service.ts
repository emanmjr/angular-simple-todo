import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  todoItems:any = localStorage.getItem('todoItems') ? JSON.parse(localStorage.getItem('todoItems')) : [];
  constructor(private http:HttpClient) { }

  // Get Todos in localStorage

  getTodos():Observable<Todo[]> { 
    console.log(this.todoItems)
    return this.todoItems;
  }

  // Delete Todo in localStorage
  deleteTodo(todo: Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Add Todo
  // addTodo(todo:Todo):Observable<Todo>{
  //   // var allEntries = JSON.parse(localStorage.getItem("todoItems")) || [];
  //   // allEntries.push(todo); 
      
  //   // return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  //   return localStorage.setItem("todoItems", JSON.stringify(todo));

  // }
}
