import { InjectionToken } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromTheme from 'src/app/core/reducers/theme.reducer';
import { environment } from '../../environments/environment';

export interface State {
  [fromTheme.themeFeatureKey]: fromTheme.State;
  router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    [fromTheme.themeFeatureKey]: fromTheme.reducer,
    router: fromRouter.routerReducer,
  }),
});

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

/**
 * Layout Selectors
 */
export const selectThemeState = createFeatureSelector<fromTheme.State>(
  fromTheme.themeFeatureKey
);

export const selectDarkTheme = createSelector(
  selectThemeState,
  fromTheme.selectDarkTheme
);

/**
 * Router Selectors
 */
export const { selectRouteData } = fromRouter.getSelectors();
