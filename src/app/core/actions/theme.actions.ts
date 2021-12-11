import { createAction, props } from '@ngrx/store';

export const setDarkTheme = createAction(
  '[Theme] Set Dark Theme',
  props<{ darkTheme: boolean }>()
);

export const toggleDarkTheme = createAction('[Theme] Toggle Dark Theme');

export const loadDarkTheme = createAction('[Theme] Load Dark Theme');
