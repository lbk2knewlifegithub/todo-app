import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lbk-todo-stats',
  template: `
    <div
      class="flex justify-between items-center text-gray-400 p-4 bg-white shadow-md"
    >
      <div>
        <p>{{ itemsLeft }} items left</p>
      </div>

      <div class="cursor-pointer" (click)="clearCompleted.emit()">
        <p>Clear Completed</p>
      </div>
    </div>
  `,
})
export class TodoStatsComponent {
  @Input() itemsLeft!: number;
  @Output() clearCompleted = new EventEmitter<void>();
}
