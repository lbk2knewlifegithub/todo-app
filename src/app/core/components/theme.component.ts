import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-theme',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="text-3xl">
      <!-- moon -->
      <i *ngIf="darkTheme; else sun" class="fas fa-moon"></i>
      <!-- end moon -->

      <!-- sun  -->
      <ng-template #sun>
        <i class="fas fa-sun "></i>
      </ng-template>
      <!-- end sun  -->
    </div>
  `,
})
export class ThemeComponent {
  @Input() darkTheme!: boolean;
}
