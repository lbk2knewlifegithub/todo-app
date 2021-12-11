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
      class="flex gap-6 items-center font-black text-muted-200 justify-center  cursor-pointer"
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
        @apply text-primary;
      }
    `,
  ],
})
export class TodoFilterComponent {
  @Input() search!: Search;
  @Output() searchChange = new EventEmitter<Search>();
}
