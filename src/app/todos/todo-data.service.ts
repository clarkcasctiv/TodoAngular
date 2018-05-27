import { Todo } from './todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  // Placeholder for last id so we can simulate
  // automatic incrementing of id's

  lastId = 0;

  // Placeholder for Todos
  todos: Todo[] = [];
  constructor() {}

  // Simulate Post /todos
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate Delete /todos/id
  deleteTodoById(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate Get /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate Get /todos/:id
  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  // Simulate Get /todos/:category
  getTodoByCategory(id: number): Todo[] {
    return this.todos.filter(todo => todo.category === id);
  }

  // Toggle Todo Complete
  toggleTodoComplete(todo: Todo) {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
