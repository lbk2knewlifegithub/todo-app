import { Component } from '@angular/core';

@Component({
  selector: 'lbk-root',
  template: `
    <lbk-header></lbk-header>

    <router-outlet></router-outlet>

    <lbk-footer></lbk-footer>
  `,
})
export class AppComponent {}
