import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      [class.active]="checked"
      class="rounded-full w-8 h-8 border border-black/30 grid place-content-center place-items-center"
    >
      <i *ngIf="checked" class="fas fa-check text-xl"></i>
    </div>
  `,
  styles: [
    `
      .active {
        @apply border-none bg-gradient-to-br from-check-bg-start to-check-bg-end;
      }
    `,
  ],
})
export class CheckboxComponent {
  @Input() checked!: boolean;
}
