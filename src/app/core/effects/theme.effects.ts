import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { ThemeActions } from 'src/app/core/actions';
import { ThemeService } from '../services/theme.service';

@Injectable({ providedIn: 'root' })
export class ThemeEffects {
  setDarkThem$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(ThemeActions.setDarkTheme),
        switchMap(({ darkTheme }) => this._themeService.setDarkTheme(darkTheme)),
        switchMap((darkTheme) => this._themeService.saveDarkTheme(darkTheme))
      ),
    {
      dispatch: false,
    }
  );

  loadDarkThem$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ThemeActions.loadDarkTheme),
      switchMap(() => this._themeService.loadDarkTheme()),
      switchMap((darkTheme) => this._themeService.saveDarkTheme(darkTheme)),
      map((darkTheme) => ThemeActions.setDarkTheme({ darkTheme }))
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _themeService: ThemeService
  ) {}
}
