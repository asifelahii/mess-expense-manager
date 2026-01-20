import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GlassCardComponent } from '../../shared/ui/glass-card.component';
import { GlassButtonComponent } from '../../shared/ui/glass-button.component';

@Component({
    selector: 'app-messes',
    imports: [CommonModule, RouterLink, GlassCardComponent, GlassButtonComponent],
    template: `
    <div class="messes-page">
      <div class="header">
        <h1>Mess Expense Manager</h1>
        <p class="subtitle">Manage your mess expenses with ease</p>
      </div>
      
      <div class="actions">
        <app-glass-button variant="primary">
          + Add New Mess
        </app-glass-button>
      </div>

      <div class="messes-grid">
        <app-glass-card [clickable]="true">
          <h2>Sample Mess</h2>
          <p>Click to view expenses for this mess</p>
          <div class="mess-info">
            <span>Members: 10</span>
            <span>Created: Jan 2026</span>
          </div>
        </app-glass-card>

        <app-glass-card class="empty-state">
          <p>No messes yet. Create one to get started!</p>
        </app-glass-card>
      </div>
    </div>
  `,
    styles: [`
    @import '../../shared/ui/theme-tokens.scss';

    .messes-page {
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--spacing-2xl) var(--spacing-lg);
    }

    .header {
      text-align: center;
      margin-bottom: var(--spacing-2xl);

      h1 {
        font-size: var(--font-size-3xl);
        font-weight: 700;
        color: var(--text-primary);
        margin: 0 0 var(--spacing-sm) 0;
      }

      .subtitle {
        font-size: var(--font-size-lg);
        color: var(--text-secondary);
        margin: 0;
      }
    }

    .actions {
      display: flex;
      justify-content: center;
      margin-bottom: var(--spacing-xl);
    }

    .messes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: var(--spacing-lg);
    }

    app-glass-card {
      h2 {
        font-size: var(--font-size-xl);
        font-weight: 600;
        color: var(--text-primary);
        margin: 0 0 var(--spacing-sm) 0;
      }

      p {
        color: var(--text-secondary);
        margin: 0 0 var(--spacing-md) 0;
      }

      .mess-info {
        display: flex;
        gap: var(--spacing-lg);
        font-size: var(--font-size-sm);
        color: var(--text-muted);
      }
    }

    .empty-state {
      text-align: center;
      opacity: 0.7;
    }
  `]
})
export class MessesComponent {}
