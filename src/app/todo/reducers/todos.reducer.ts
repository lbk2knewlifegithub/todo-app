import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  TodoActions,
  TodoApiActions,
  TodoPageActions
} from 'src/app/todo/actions';
import { Todo } from '../models';
import { Search } from '../models/search.model';

export const todosFeatureKey = 'todos';

export interface State extends EntityState<Todo> {
  selectedTodoId: string | null;
  search: Search;
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
  selectId: (todo: Todo) => todo.id,
  // sortComparer: (todo1, todo2 ) => todo1.createdDate < todo2.createdDate ? 1 : -1,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  selectedTodoId: null,
  search: 'all',
});

export const reducer = createReducer(
  initialState,
  on(TodoPageActions.searchTodo, (state, { search }) => ({ ...state, search })),
  on(
    TodoApiActions.loadTodosSuccess,
    TodoApiActions.clearTodoCompletedSuccess,
    (state, { todos }) => adapter.setAll(todos, state)
  ),
  on(TodoApiActions.createTodoSuccess, (state, { todo }) =>
    adapter.addOne(todo, state)
  ),
  on(TodoApiActions.removeTodoSuccess, (state, { todo }) =>
    adapter.removeOne(todo.id, state)
  ),

  on(TodoActions.removeAllTodo, (state) => adapter.removeAll(state)),

  on(TodoActions.updateTodo, (state, { todo }) =>
    adapter.updateOne({ id: todo.id, changes: todo }, state)
  ),
  on(TodoActions.setAllTodo, (state, { todos }) => adapter.setAll(todos, state))
);

export const selectId = (state: State) => state.selectedTodoId;
export const selectSearch = (state: State) => state.search;
