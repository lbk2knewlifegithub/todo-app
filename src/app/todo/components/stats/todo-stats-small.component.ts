import { Component } from '@angular/core';
import { TodoStatsComponent } from './todo-stats.component';

@Component({
  selector: 'lbk-todo-stats-small',
  template: `
  <div class="text-muted-100 flex justify-between items-center bg-elements shadow-lg p-4">

    <p>
      {{itemsLeft}} items left
    </p>

    <div class="cursor-pointer" (click)="clearCompleted.emit()">
      <p>Clear Completed</p>
    </div>
  </div>
  `,
})
export class TodoStatsSmallComponent extends TodoStatsComponent {}
