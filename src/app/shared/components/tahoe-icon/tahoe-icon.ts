import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type TahoeIconName =
  // Navigation icons
  | 'dashboard'
  | 'expense'
  | 'meal'
  | 'deposit'
  | 'members'
  | 'settings'
  | 'logout'
  | 'exit'
  // Notification & Activity icons
  | 'bell'
  | 'shopping-bag'
  | 'utensils'
  | 'wallet'
  | 'file-text'
  | 'receipt'
  | 'calendar'
  // Suggestion & Utility icons
  | 'lightbulb'
  | 'book-open'
  | 'refresh'
  | 'trending-up'
  | 'alert-circle'
  | 'info'
  | 'check-circle'
  | 'x-circle'
  | 'inbox';

export type { TahoeIconName };

@Component({
  selector: 'app-tahoe-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tahoe-icon.html',
  styleUrls: ['./tahoe-icon.scss'],
})
export class TahoeIcon {
  @Input() name!: TahoeIconName;
  @Input() size = 18;
}
