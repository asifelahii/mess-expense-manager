import { CommonModule } from '@angular/common';
import { Component, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-glass-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glass-panel.html',
  styleUrls: ['./glass-panel.scss'],
  host: {
    class: 'glass-panel',
    '[class.is-interactive]': 'interactive',
    '[attr.data-density]': 'density',
  },
})
export class GlassPanelComponent {
  @Input() interactive = false;
  @Input() density: 'default' | 'compact' = 'default';

  @ContentChild('glassTitle', { read: ElementRef }) title?: ElementRef;
  @ContentChild('glassActions', { read: ElementRef }) actions?: ElementRef;

  get hasHeaderContent(): boolean {
    // header exists if either slot is used
    return true; // keeps header stable; slots can be empty without breaking layout
  }
}
