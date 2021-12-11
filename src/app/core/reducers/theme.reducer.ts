import { createReducer, on } from '@ngrx/store';
import { ThemeActions } from 'src/app/core/actions';

export const themeFeatureKey = 'theme';

export interface State {
  darkTheme: boolean;
}

const initialState: State = {
  darkTheme: false,
};

export const reducer = createReducer(
  initialState,
  on(ThemeActions.setDarkTheme, (_, { darkTheme }) => ({ darkTheme }))
);

export const selectDarkTheme = (state: State) => state.darkTheme;
