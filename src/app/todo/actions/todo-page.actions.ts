import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { createAction, props } from '@ngrx/store';
import { Todo } from '../models';
import { Search } from '../models/search.model';

export const enter = createAction('[Todo Page] Enter');

export const createTodo = createAction(
  '[Todo Page] Create Todo',
  props<{ name: string }>()
);

export const removeTodo = createAction(
  '[Todo Page] Remove Todo',
  props<{ todo: Todo }>()
);

export const completedTodo = createAction(
  '[Todo Page] Complete Todo',
  props<{ todo: Todo }>()
);

export const clearCompletedTodo = createAction(
  '[Todo Page] Clear Complete Todo'
);

// search
export const searchTodo = createAction(
  '[Todo Page] Search Todo',
  props<{ search: Search }>()
);

export const dragDropTodo = createAction(
  '[Todo Page] Drap Drop Todo',
  props<{ dragDrop: CdkDragDrop<Todo[]> }>()
);
