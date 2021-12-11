import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  TodoActions,
  TodoApiActions,
  TodoPageActions
} from 'src/app/todo/actions';
import { TodoStorageService } from '../services/todo-storage.service';

@Injectable({ providedIn: 'root' })
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this._actions$.pipe(
      ofType(TodoPageActions.enter),
      switchMap(() =>
        this._todoStorageService.getTodos().pipe(
          map((todos) => TodoApiActions.loadTodosSuccess({ todos })),
          catchError((error) =>
            of(TodoApiActions.loadTodosFailure({ error: error }))
          )
        )
      )
    )
  );

  setAllTodo$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(TodoActions.setAllTodo),
        switchMap(({ todos }) => this._todoStorageService.setAllTodo(todos))
      ),
    {
      dispatch: false,
    }
  );

  updateTodo$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(TodoActions.updateTodo),
        switchMap(({ todo }) => this._todoStorageService.updateTodo(todo))
      ),
    {
      dispatch: false,
    }
  );

  newTodo$ = createEffect(() =>
    this._actions$.pipe(
      ofType(TodoPageActions.createTodo),
      switchMap(({ name }) =>
        this._todoStorageService.create(name).pipe(
          map((todo) => TodoApiActions.createTodoSuccess({ todo })),
          catchError((error) => of(TodoApiActions.createTodoFailure({ name })))
        )
      )
    )
  );

  removeTodo$ = createEffect(() =>
    this._actions$.pipe(
      ofType(TodoPageActions.removeTodo),
      switchMap(({ todo }) =>
        this._todoStorageService.remove(todo).pipe(
          map(() => TodoApiActions.removeTodoSuccess({ todo })),
          catchError((error) => of(TodoApiActions.removeTodoFailure({ todo })))
        )
      )
    )
  );

  completedTodo$ = createEffect(() =>
    this._actions$.pipe(
      ofType(TodoPageActions.completedTodo),
      switchMap(({ todo }) =>
        this._todoStorageService.completed(todo).pipe(
          map((_) =>
            TodoActions.updateTodo({
              todo: { ...todo, completed: !todo.completed },
            })
          )
          // catchError((error) =>
          //   of(TodoApiActions.completedTodoFailure({ todo }))
          // )
        )
      )
    )
  );

  clearCompletedTodo$ = createEffect(() =>
    this._actions$.pipe(
      ofType(TodoPageActions.clearCompletedTodo),
      switchMap(() =>
        this._todoStorageService.clearCompleted().pipe(
          map((todos) => TodoApiActions.clearTodoCompletedSuccess({ todos }))
          // catchError((error) => of(TodoApiActions.clearTodoCompletedFailure({ error: })))
        )
      )
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _todoStorageService: TodoStorageService
  ) {}
}
