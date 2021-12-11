import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { ThemeActions } from 'src/app/core/actions';
import * as fromRoot from 'src/app/reduders';

@Component({
  selector: 'lbk-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="fixed top-0 left-0 w-full z-[-1]">
      <!-- background -->
      <div class="absolute w-full top-0 left-0 z-[-1] max-h-32">
        <!-- background dark theme -->
        <div *ngIf="darkTheme$ | async; else lightBg">
          <img
            class="bg desktop:hidden"
            src="/assets/images/bg-mobile-light.jpg"
            alt="Background"
          />

          <img
            class="bg hidden desktop:block"
            src="/assets/images/bg-desktop-light.jpg"
            alt="Background"
          />
        </div>

        <!-- end background dark theme -->

        <!-- background light theme -->
        <ng-template #lightBg>
          <img
            class="bg desktop:hidden"
            src="/assets/images/bg-mobile-dark.jpg"
            alt="Background"
          />

          <img
            class="bg hidden desktop:block"
            src="/assets/images/bg-desktop-dark.jpg"
            alt="Background"
          />
        </ng-template>
        <!-- end background light theme -->
      </div>
      <!-- end background -->

      <nav
        class="container flex justify-between items-center py-8 max-w-2xl tablet:py-16"
      >
        <!-- logo -->
        <div>
          <h1
            class="text-3xl text-white  font-bold tracking-[.5rem] tablet:text-4xl"
          >
            TO DO
          </h1>
        </div>
        <!-- end logo -->

        <!-- theme -->
        <lbk-theme
          (click)="onToggleTheme()"
          [darkTheme]="(darkTheme$ | async)!"
        ></lbk-theme>
        <!-- end theme -->
      </nav>
    </header>
  `,
  styles: [
    `
      .bg {
        @apply min-h-[200px] max-h-96 w-full object-cover object-center;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  darkTheme$: Observable<boolean> = this._store.select(
    fromRoot.selectDarkTheme
  );

  constructor(private readonly _store: Store) {}

  onToggleTheme(): void {
    this.darkTheme$.pipe(take(1)).subscribe((darkTheme) => {
      this._store.dispatch(
        ThemeActions.setDarkTheme({ darkTheme: !darkTheme })
      );
    });
  }

  ngOnInit(): void {
    this._store.dispatch(ThemeActions.loadDarkTheme());
  }
}
