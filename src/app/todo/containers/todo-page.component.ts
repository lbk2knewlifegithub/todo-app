import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-todo-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1>Todo</h1>`,
})
export class TodoPageComponent {}
