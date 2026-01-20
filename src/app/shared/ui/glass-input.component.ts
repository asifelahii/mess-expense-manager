import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-glass-input',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GlassInputComponent),
      multi: true
    }
  ],
  template: `
    <div class="glass-input-wrapper">
      <label *ngIf="label" class="label">{{ label }}</label>
      <input
        [type]="type"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [value]="value"
        (input)="onInput($event)"
        (blur)="onTouched()"
        class="glass-input"
      />
    </div>
  `,
  styles: [`
    @import './theme-tokens.scss';

    .glass-input-wrapper {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xs);
    }

    .label {
      font-family: var(--font-family);
      font-size: var(--font-size-sm);
      font-weight: 500;
      color: var(--text-secondary);
    }

    .glass-input {
      @include glass-effect;
      border-radius: var(--radius-md);
      padding: var(--spacing-sm) var(--spacing-md);
      font-family: var(--font-family);
      font-size: var(--font-size-base);
      color: var(--text-primary);
      outline: none;
      transition: all var(--transition-base);

      &::placeholder {
        color: var(--text-muted);
      }

      &:focus {
        @include glass-hover;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  `]
})
export class GlassInputComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;

  value: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
