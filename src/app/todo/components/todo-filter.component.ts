import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Search } from '../models/search.model';

@Component({
  selector: 'lbk-todo-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul
      class="flex gap-6 items-center text-gray-500 justify-center mt-6 bg-white shadow-lg p-4 font-bold cursor-pointer"
    >
      <li [class.active]="search == 'all'" (click)="searchChange.emit('all')">
        All
      </li>
      <li
        [class.active]="search == 'active'"
        (click)="searchChange.emit('active')"
      >
        Active
      </li>
      <li
        [class.active]="search == 'completed'"
        (click)="searchChange.emit('completed')"
      >
        Completed
      </li>
    </ul>
  `,
  styles: [
    `
      .active {
        @apply text-blue-500;
      }
    `,
  ],
})
export class TodoFilterComponent {
  @Input() search!: Search;
  @Output() searchChange = new EventEmitter<Search>();
}
