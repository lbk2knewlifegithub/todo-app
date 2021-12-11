import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/todo/models';

// clear todo completed
export const clearTodoCompletedSuccess = createAction(
  '[Todo API] Clear Todo Completed Success',
  props<{ todos: Todo[] }>()
);

// export const clearTodoCompletedFailure = createAction(
//   '[Todo API] Clear Todo Completed Failure',
//   props<{ error: string }>()
// );

// create todo
export const createTodoSuccess = createAction(
  '[Todo API] Create Todo Success',
  props<{ todo: Todo }>()
);
export const createTodoFailure = createAction(
  '[Todo API] Create Todo Failure',
  props<{ name: string }>()
);

// remove todo
export const removeTodoSuccess = createAction(
  '[Todo API] Remove Todo Success',
  props<{ todo: Todo }>()
);
export const removeTodoFailure = createAction(
  '[Todo API] Remove Todo Failure',
  props<{ todo: Todo }>()
);

// completed todo
export const completedTodoSuccess = createAction(
  '[Todo API] Completed Todo Success',
  props<{ todo: Todo }>()
);

export const completedTodoFailure = createAction(
  '[Todo API] Completed Todo Failure',
  props<{ todo: Todo }>()
);

// load todo
export const loadTodosSuccess = createAction(
  '[Todo API] Load Todos Success',
  props<{ todos: Todo[] }>()
);
export const loadTodosFailure = createAction(
  '[Todo API] Load Todos Failure',
  props<{ error: string }>()
);
