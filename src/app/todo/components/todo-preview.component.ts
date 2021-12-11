import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: 'lbk-todo-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="bg-elements shadow-md flex justify-between p-4 items-center border-b-2 border-fill cursor-pointer"
    >
      <div class="flex gap-4 items-center">
        <!-- checkbox -->
        <lbk-checkbox
          (click)="completed.emit()"
          [checked]="todo.completed"
        ></lbk-checkbox>
        <!-- end checkbox -->

        <!-- name -->
        <p class="text-fill font-bold {{ todo.completed ? 'line-through text-muted' : '' }}">
          {{ todo.name }}
        </p>
        <!-- end name -->
      </div>

      <!-- remove -->
      <div
        (click)="remove.emit()"
        class="text-2xl text-muted-100 cursor-pointer"
      >
        <i class="fas fa-times"></i>
      </div>
      <!-- end remove -->
    </div>
  `,
})
export class TodoPreviewComponent {
  @Input() todo!: Todo;
  @Output() remove = new EventEmitter<void>();
  @Output() completed = new EventEmitter<void>();
}
