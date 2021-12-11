import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lbk-todo-stats',
  template: ``,
})
export class TodoStatsComponent {
  @Input() itemsLeft!: number;
  @Output() clearCompleted = new EventEmitter<void>();
}
