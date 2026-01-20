import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glass-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [type]="type"
      [disabled]="disabled"
      class="glass-button"
      [class.primary]="variant === 'primary'"
      [class.secondary]="variant === 'secondary'">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    @import './theme-tokens.scss';

    .glass-button {
      @include glass-effect;
      border-radius: var(--radius-md);
      padding: var(--spacing-sm) var(--spacing-lg);
      font-family: var(--font-family);
      font-size: var(--font-size-base);
      font-weight: 500;
      color: var(--text-primary);
      cursor: pointer;
      transition: all var(--transition-base);
      outline: none;

      &:hover:not(:disabled) {
        @include glass-hover;
        transform: translateY(-1px);
      }

      &:active:not(:disabled) {
        transform: translateY(0);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &.primary {
        background: linear-gradient(135deg, rgba(102, 217, 255, 0.3) 0%, rgba(0, 184, 212, 0.3) 100%);
        color: var(--text-primary);
        font-weight: 600;

        &:hover:not(:disabled) {
          background: linear-gradient(135deg, rgba(102, 217, 255, 0.4) 0%, rgba(0, 184, 212, 0.4) 100%);
        }
      }

      &.secondary {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  `]
})
export class GlassButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' = 'secondary';
  @Input() disabled: boolean = false;
}
