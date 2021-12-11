import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-theme',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-3xl cursor-pointer">
      <!-- moon -->
      <i *ngIf="darkTheme; else sun" class="fas fa-sun text-white"></i>
      <!-- end moon -->

      <!-- sun  -->
      <ng-template #sun>
        <i class="fas fa-moon text-white"></i>
      </ng-template>
      <!-- end sun  -->
    </div>
  `,
})
export class ThemeComponent {
  @Input() darkTheme!: boolean;
}
