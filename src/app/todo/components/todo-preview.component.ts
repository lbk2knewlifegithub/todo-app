import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'lbk-todo-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1>todo preview</h1>`
})

export class TodoPreviewComponent  {
}
