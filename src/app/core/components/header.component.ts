import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header>
      <nav>
        <!-- logo -->
        <div>
          <img
            class="w-full object-cover object-center"
            src="/assets/images/bg-mobile-light.jpg"
            alt="Background"
          />
        </div>
        <!-- end logo -->

        <!-- theme -->
        <!-- end theme -->
      </nav>
    </header>
  `,
})
export class HeaderComponent {}
