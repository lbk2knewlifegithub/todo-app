import { createAction, props } from '@ngrx/store';
import { Todo } from '../models';

export const loadTodo = createAction('[Todo] Load Todo');

export const updateTodo = createAction(
  '[Todo] Update Todo',
  props<{ todo: Todo }>()
);

export const setAllTodo = createAction(
  '[Todo] Set All Todo',
  props<{ todos: Todo[] }>()
);


export const removeAllTodo = createAction(
  '[Todo] Remove All Todo',
);
