import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GlassCardComponent } from '../../shared/ui/glass-card.component';
import { GlassButtonComponent } from '../../shared/ui/glass-button.component';
import { formatMonth } from '../../domain/calculations';

@Component({
  selector: 'app-month-details',
  standalone: true,
  imports: [CommonModule, GlassCardComponent, GlassButtonComponent],
  template: `
    <div class="month-details-page">
      <div class="header">
        <h1>{{ monthDisplay }}</h1>
        <p class="subtitle">Mess ID: {{ messId }}</p>
      </div>

      <div class="summary">
        <app-glass-card>
          <h3>Summary</h3>
          <div class="summary-grid">
            <div class="summary-item">
              <span class="label">Total Expense</span>
              <span class="value">₹0.00</span>
            </div>
            <div class="summary-item">
              <span class="label">Members</span>
              <span class="value">0</span>
            </div>
            <div class="summary-item">
              <span class="label">Per Person</span>
              <span class="value">₹0.00</span>
            </div>
            <div class="summary-item">
              <span class="label">Status</span>
              <span class="value">Open</span>
            </div>
          </div>
        </app-glass-card>
      </div>

      <div class="actions">
        <app-glass-button variant="primary">
          + Add Expense
        </app-glass-button>
        <app-glass-button>
          View Members
        </app-glass-button>
        <app-glass-button>
          Lock Month
        </app-glass-button>
      </div>

      <div class="expenses">
        <app-glass-card>
          <h3>Expenses</h3>
          <p class="empty-state">No expenses recorded for this month yet.</p>
        </app-glass-card>
      </div>
    </div>
  `,
  styles: [`
    @import '../../shared/ui/theme-tokens.scss';

    .month-details-page {
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
        margin: 0 0 var(--spacing-xs) 0;
      }

      .subtitle {
        font-size: var(--font-size-base);
        color: var(--text-muted);
        margin: 0;
      }
    }

    .summary {
      margin-bottom: var(--spacing-xl);

      h3 {
        font-size: var(--font-size-xl);
        font-weight: 600;
        color: var(--text-primary);
        margin: 0 0 var(--spacing-lg) 0;
      }

      .summary-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: var(--spacing-lg);
      }

      .summary-item {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);

        .label {
          font-size: var(--font-size-sm);
          color: var(--text-muted);
        }

        .value {
          font-size: var(--font-size-xl);
          font-weight: 600;
          color: var(--text-primary);
        }
      }
    }

    .actions {
      display: flex;
      gap: var(--spacing-md);
      margin-bottom: var(--spacing-xl);
      flex-wrap: wrap;
      justify-content: center;
    }

    .expenses {
      h3 {
        font-size: var(--font-size-xl);
        font-weight: 600;
        color: var(--text-primary);
        margin: 0 0 var(--spacing-md) 0;
      }

      .empty-state {
        text-align: center;
        color: var(--text-muted);
        padding: var(--spacing-2xl) 0;
      }
    }
  `]
})
export class MonthDetailsComponent implements OnInit {
  messId: string = '';
  month: string = '';
  monthDisplay: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.messId = params['id'];
      this.month = params['month'];
      this.monthDisplay = formatMonth(this.month);
    });
  }
}
