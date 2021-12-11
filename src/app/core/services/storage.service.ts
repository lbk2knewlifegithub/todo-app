import { Inject, Injectable, InjectionToken } from '@angular/core';
import { map, Observable, of, throwError } from 'rxjs';

export function storageFactory() {
  return typeof window === undefined || typeof localStorage === undefined
    ? null
    : localStorage;
}

export const LOCAL_STORAGE_TOKEN = new InjectionToken('todo-local-storage', {
  factory: storageFactory,
});

@Injectable({providedIn: 'root'})
export class StorageService {
  constructor(@Inject(LOCAL_STORAGE_TOKEN) private storage: Storage) {}

  supported(): Observable<boolean> {
    return this.storage !== null
      ? of(true)
      : throwError(() => 'Local Storage Not Supported');
  }

  setItem(key: string, value: any): Observable<void> {
    return this.supported().pipe(
      map(() => this.storage.setItem(key, JSON.stringify(value)))
    );
  }

  getItem<T>(key: string): Observable<T | null> {
    return this.supported().pipe(
      map(() => {
        const raw = this.storage.getItem(key);
        return raw ? (JSON.parse(raw) as T) : null;
      })
    );
  }
}
