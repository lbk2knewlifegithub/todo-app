import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Search } from '../../models/search.model';
import { TodoStatsComponent } from './todo-stats.component';

@Component({
  selector: 'lbk-todo-stats-large',
  template: `
    <div
      class="text-muted-100 flex justify-between items-center bg-elements shadow-lg p-4"
    >
      <p>{{ itemsLeft }} items left</p>

      <!-- filter -->
      <lbk-todo-filter
        [search]="search"
        (searchChange)="searchChange.emit($event)"
      ></lbk-todo-filter>
      <!-- end filter -->

      <div class="cursor-pointer" (click)="clearCompleted.emit()">
        <p>Clear Completed</p>
      </div>
    </div>
  `,
})
export class TodoStatsLargeComponent extends TodoStatsComponent {
  @Input() search!: Search;
  @Output() searchChange = new EventEmitter<Search>();
}
