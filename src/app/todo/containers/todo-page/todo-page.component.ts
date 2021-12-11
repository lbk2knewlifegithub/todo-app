import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable } from 'rxjs';
import { TodoActions, TodoPageActions } from 'src/app/todo/actions';
import * as fromTodos from 'src/app/todo/reducers';
import { Todo } from '../../models';
import { Search } from '../../models/search.model';

@Component({
  selector: 'lbk-todo-page',
  templateUrl: './todo-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoPageComponent implements OnInit {
  todos$!: Observable<Todo[]>;
  empty$!: Observable<boolean>;
  itemsLeft$!: Observable<number>;
  search$: Observable<Search>;

  constructor(private readonly _store: Store) {
    this.todos$ = this._store.select(fromTodos.selectTodosBySearch);
    this.search$ = this._store.select(fromTodos.selectSearchTodo);
    this.itemsLeft$ = this.todos$.pipe(map((todos) => todos.length));

    this.empty$ = combineLatest(
      [this.todos$, this.search$],
      (todos, search) => todos.length === 0 && search === 'all'
    );
  }

  ngOnInit(): void {
    this._store.dispatch(TodoPageActions.enter());
  }

  newTodo(name: string): void {
    this._store.dispatch(TodoPageActions.createTodo({ name }));
  }

  remove(todo: Todo): void {
    this._store.dispatch(TodoPageActions.removeTodo({ todo }));
  }

  completed(todo: Todo): void {
    this._store.dispatch(TodoPageActions.completedTodo({ todo }));
  }

  clearCompleted(): void {
    this._store.dispatch(TodoPageActions.clearCompletedTodo());
  }

  onSearch(search: Search): void {
    this._store.dispatch(TodoPageActions.searchTodo({ search }));
  }

  /**
   *
   * @param todos
   * - I think it is temporary solution, please help me to improve it.
   */
  dragDrop(todos: Todo[]): void {
    this._store.dispatch(TodoActions.setAllTodo({ todos }));
  }
}
