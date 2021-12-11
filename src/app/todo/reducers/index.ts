export const booksFeatureKey = 'todos';
import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as fromTodos from 'src/app/todo/reducers/todos.reducer';

export const todosFeatureKey = 'todos';

export interface TodosState {
  [fromTodos.todosFeatureKey]: fromTodos.State;
}

export interface State {
  [todosFeatureKey]: TodosState;
}

// reducers
export function reducers(state: TodosState | undefined, action: Action) {
  return combineReducers({
    [fromTodos.todosFeatureKey]: fromTodos.reducer,
  })(state, action);
}

export const selectTodosState =
  createFeatureSelector<TodosState>(todosFeatureKey);

// todos selectors
export const selectTodosEntitiesState = createSelector(
  selectTodosState,
  (state) => state.todos
);

export const selectSelectedTodoId = createSelector(
  selectTodosEntitiesState,
  fromTodos.selectId
);

export const selectSearchTodo = createSelector(
  selectTodosEntitiesState,
  fromTodos.selectSearch
);

export const {
  selectIds: selectTodosIds,
  selectEntities: selectTodosEntities,
  selectAll: selectAllTodos,
  selectTotal: selectTotalTodos,
} = fromTodos.adapter.getSelectors(selectTodosEntitiesState);


export const selectTodosBySearch = createSelector(
  selectAllTodos,
  selectSearchTodo,
  (todos, search) => {
    if (search == 'all') return todos;
    if (search === 'active') return todos.filter((todo) => !todo.completed);
    return todos.filter((todo) => todo.completed);
  }
);
