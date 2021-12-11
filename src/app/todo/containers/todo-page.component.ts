import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { TodoActions, TodoPageActions } from 'src/app/todo/actions';
import * as fromTodos from 'src/app/todo/reducers';
import { Todo } from '../models';
import { Search } from '../models/search.model';

@Component({
  selector: 'lbk-todo-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="mt-24 z-50 tablet:mt-40">
      <div class="container max-w-2xl">
        <!-- input -->
        <lbk-todo-input (newTodo)="newTodo($event)"></lbk-todo-input>
        <!-- end input -->

        <div class="rounded-lg overflow-hidden shadow-lg mt-4 ">
          <!-- todo list -->
          <lbk-todo-preview-list
            class="block"
            (dragDropChange)="dragDrop($event)"
            (remove)="remove($event)"
            (completed)="completed($event)"
            [todos]="(todos$ | async)!"
          ></lbk-todo-preview-list>
          <!-- end todo list -->

          <!-- stats small -->
          <lbk-todo-stats-small
            class="tablet:hidden"
            [itemsLeft]="(itemsLeft$ | async)!"
            (clearCompleted)="clearCompleted()"
          ></lbk-todo-stats-small>
          <!-- end stats small -->

          <!-- stats large -->
          <lbk-todo-stats-large
            class="hidden tablet:block"
            [itemsLeft]="(itemsLeft$ | async)!"
            (clearCompleted)="clearCompleted()"
            [search]="(search$ | async)!"
            (searchChange)="onSearch($event)"
          ></lbk-todo-stats-large>
          <!-- end stats large -->
        </div>

        <!-- filter -->
        <lbk-todo-filter
          class="block mt-4 p-4 tablet:hidden bg-elements shadow-lg rounded-lg"
          [search]="(search$ | async)!"
          (searchChange)="onSearch($event)"
        ></lbk-todo-filter>
        <!-- end filter -->
      </div>

      <!-- guide  -->
      <div class="mt-16">
        <p class="text-muted-200 font-bold text-center text-lg">
          Drag and drop to reorder list
        </p>
      </div>
      <!-- end guide  -->
    </main>
  `,
})
export class TodoPageComponent implements OnInit {
  todos$!: Observable<Todo[]>;
  itemsLeft$!: Observable<number>;
  search$: Observable<Search>;

  constructor(private readonly _store: Store) {
    this.todos$ = this._store.select(fromTodos.selectTodosBySearch);
    this.search$ = this._store.select(fromTodos.selectSearchTodo);
    this.itemsLeft$ = this.todos$.pipe(map((todos) => todos.length));
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
