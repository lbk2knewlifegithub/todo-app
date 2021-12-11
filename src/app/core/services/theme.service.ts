import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private themeKey = 'theme';

  constructor(private readonly _storage: StorageService) {}

  setDarkTheme(darkTheme: boolean): Observable<boolean> {
    darkTheme
      ? document.body.classList.add('dark-theme')
      : document.body.classList.remove('dark-theme');
    return of(darkTheme);
  }

  saveDarkTheme(darkTheme: boolean): Observable<boolean> {
    return this._storage
      .setItem(this.themeKey, darkTheme)
      .pipe(map(() => darkTheme));
  }

  loadDarkTheme(): Observable<boolean> {
    // backup to local storage
    return this._storage
      .getItem(this.themeKey)
      .pipe(map((darkTheme) => !!darkTheme));
  }
}
