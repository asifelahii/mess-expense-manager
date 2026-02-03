import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TahoeIcon, type TahoeIconName } from '../../tahoe-icon/tahoe-icon';

// Type definitions for different card variants
export interface AnnouncementItem {
  text: string;
  timestamp?: string;
  icon?: TahoeIconName;
  badge?: string;
}

export interface FooterContent {
  text: string;
  reference?: string;
  showRefreshButton?: boolean;
}

export type CardVariant = 'notifications' | 'quotes' | 'suggestions' | 'default';

@Component({
  selector: 'app-announcement-card',
  standalone: true,
  imports: [CommonModule, TahoeIcon],
  templateUrl: './announcement-card.html',
  styleUrl: './announcement-card.scss',
})
export class AnnouncementCard implements OnInit {
  @Input() title: string = 'Announcements';
  @Input() items: AnnouncementItem[] = [];
  @Input() footer?: FooterContent;
  @Input() variant: CardVariant = 'default';

  /**
   * TOGGLE THIS: Set to true for expandable/collapsible mode
   * Set to false to show all items by default
   */
  @Input() expandable: boolean = false;

  @Input() maxItemsPreview: number = 3; // For expandable mode
  @Input() showRefreshButton: boolean = false;
  @Input() icon?: TahoeIconName; // Optional header icon

  isExpanded: boolean = false;

  ngOnInit(): void {
    // Auto-expand if not in expandable mode
    if (!this.expandable) {
      this.isExpanded = true;
    }
  }

  get displayedItems(): AnnouncementItem[] {
    if (!this.expandable || this.isExpanded) {
      return this.items;
    }
    return this.items.slice(0, this.maxItemsPreview);
  }

  get hasMoreItems(): boolean {
    return this.expandable && this.items.length > this.maxItemsPreview;
  }

  toggleExpand(): void {
    if (this.expandable) {
      this.isExpanded = !this.isExpanded;
    }
  }

  onRefresh(): void {
    // Emit event or handle refresh logic
    // For now, we'll let the parent component handle this via data binding
    console.log('Refresh clicked');
  }
}
