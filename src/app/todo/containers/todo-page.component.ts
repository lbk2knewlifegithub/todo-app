import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-todo-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="mt-32">
      <div class="container">
        <lbk-todo-input (newTodo)="newTodo($event)"></lbk-todo-input>

        <lbk-todo-preview-list></lbk-todo-preview-list>

        <lbk-todo-filter></lbk-todo-filter>
      </div>
    </main>
  `,
})
export class TodoPageComponent {
  newTodo(name: string): void {
    alert(name);
  }
}
