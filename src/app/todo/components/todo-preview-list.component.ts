import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: 'lbk-todo-preview-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div cdkDropList (cdkDropListDropped)="dragDrop($event)" class="rounded-md">
      <lbk-todo-preview
        *ngFor="let todo of todos"
        cdkDrag
        (remove)="remove.emit(todo)"
        (completed)="completed.emit(todo)"
        [todo]="todo"
      ></lbk-todo-preview>
    </div>
  `,
})
export class TodoPreviewListComponent {
  @Input() todos!: Todo[];
  @Output() remove = new EventEmitter<Todo>();
  @Output() completed = new EventEmitter<Todo>();
  @Output() dragDropChange = new EventEmitter<Todo[]>();

  identifyTodo(index: number, todo: Todo) {
    return todo.id;
  }

  dragDrop(event: CdkDragDrop<Todo[]>) {
    const { previousIndex, currentIndex } = event;
    const clone = JSON.parse(JSON.stringify(this.todos)) as Todo[];
    moveItemInArray(clone, previousIndex, currentIndex);
    this.dragDropChange.emit(clone);
  }
}
