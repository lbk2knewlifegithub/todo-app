import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-footer',
  template: `
    <footer class="fixed bottom-0 left-0 w-full">
      <div class="text-center">
        Challenge by
        <a
          class=""
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          >Frontend Mentor</a
        >. Coded by
        <a class="underline" href="https://github.com/lbk2knewlifegithub"
          >lbk2k</a
        >.
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
