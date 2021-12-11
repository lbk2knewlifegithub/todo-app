import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
@Component({
  selector: 'lbk-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      [class.active]="checked"
      class="rounded-full w-8 h-8 border border-ring-checkbox grid place-content-center place-items-center cursor-pointer"
    >
      <i *ngIf="checked" class="text-white fas fa-check text-xl"></i>
    </div>
  `,
  styles: [
    `
      .active {
        @apply bg-gradient-to-br from-check-bg-start to-check-bg-end;
      }
    `,
  ],
})
export class CheckboxComponent {
  @Input() checked!: boolean;
}
