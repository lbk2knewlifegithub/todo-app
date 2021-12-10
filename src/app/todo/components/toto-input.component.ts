import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'lbk-todo-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative">
      <!-- check box -->
      <lbk-checkbox
        class="absolute left-5 top-1/2 -translate-y-1/2"
      ></lbk-checkbox>
      <!-- end check box -->

      <!-- input -->
      <input
        #input
        (keydown.enter)="newTodo.emit(input.value); input.value = ''"
        class="p-4 pl-16"
        placeholder="Create a new todo..."
        type="text"
      />
      <!-- end input -->
    </div>
  `,
})
export class TodoInputComponent {
  @Output() newTodo = new EventEmitter<string>();
}
