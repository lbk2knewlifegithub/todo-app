import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { StorageService } from 'src/app/core/services';
import { v4 } from 'uuid';
import { Todo } from '../models';

@Injectable({ providedIn: 'root' })
export class TodoStorageService {
  private todosKey = 'todos';

  constructor(private readonly _storage: StorageService) {}

  getTodos(): Observable<Todo[]> {
    return this._storage.supported().pipe(
      map((_) => this._storage.getItem<Todo[]>(this.todosKey)),
      map((todos) => {
        return todos ?? [];
      })
    );
  }

  updateTodo(todo: Todo): Observable<Todo[]> {
    return this.getTodos().pipe(
      map((todos) => [...todos.filter((t) => t.id !== todo.id), todo]),
      tap((todos) => this._storage.setItem(this.todosKey, todos))
    );
  }

  setAllTodo(todos: Todo[]): Observable<void> {
    return this.getTodos().pipe(
      map(() => this._storage.setItem(this.todosKey, todos))
    );
  }

  /**
   *
   * @param name - name of the todo
   * @returns
   */
  create(name: string): Observable<Todo> {
    const newTodo: Todo = {
      id: v4(),
      name,
      completed: false,
    };
    return this.getTodos().pipe(
      map((todos) => [...todos, newTodo]),
      tap((todos) => this._storage.setItem(this.todosKey, todos)),
      map((_) => newTodo)
    );
  }

  remove(todo: Todo): Observable<Todo[]> {
    return this.getTodos().pipe(
      map((todos) => todos.filter((t) => t.id !== todo.id)),
      tap((todos) => this._storage.setItem(this.todosKey, todos))
    );
  }

  completed(todo: Todo): Observable<Todo> {
    const newTodo = { ...todo, completed: !todo.completed };

    return this.getTodos().pipe(
      map((todos) => [
        ...todos.filter((t) => t.id !== todo.id),
        // { ...todo, completed: !todo.completed },
        newTodo,
      ]),
      tap((todos) => this._storage.setItem(this.todosKey, todos)),
      map((_) => newTodo)
    );
  }

  clearCompleted(): Observable<Todo[]> {
    return this.getTodos().pipe(
      map((todos) => todos.filter((t) => !t.completed)),
      tap((todos) => this._storage.setItem(this.todosKey, todos))
    );
  }
}
