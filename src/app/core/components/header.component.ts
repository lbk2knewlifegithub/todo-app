import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'lbk-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="fixed top-0 left-0 w-full z-[-1]">
      <!-- background -->
      <div class="absolute top-0 left-0 ">
        <img
          class="w-full object-cover object-center"
          src="/assets/images/bg-mobile-light.jpg"
          alt="Background"
        />
      </div>
      <!-- end background -->

      <nav class="container flex justify-between items-center py-10">
        <!-- logo -->
        <div>
          <h1 class="text-white text-4xl  font-bold tracking-[.5rem]">TO DO</h1>
        </div>
        <!-- end logo -->

        <!-- theme -->
        <lbk-theme [darkTheme]="(darkTheme$ | async)!"></lbk-theme>
        <!-- end theme -->
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  darkTheme$: Observable<boolean> = of(false);
}
