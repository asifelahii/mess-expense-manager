import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glass-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="glass-card" [class.clickable]="clickable">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    @import './theme-tokens.scss';

    .glass-card {
      @include glass-effect;
      border-radius: var(--radius-lg);
      padding: var(--spacing-lg);
      transition: all var(--transition-base);

      &.clickable {
        cursor: pointer;

        &:hover {
          @include glass-hover;
          transform: translateY(-2px);
        }
      }
    }
  `]
})
export class GlassCardComponent {
  @Input() clickable: boolean = false;
}
