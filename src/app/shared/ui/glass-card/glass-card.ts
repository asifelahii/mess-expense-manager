import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-glass-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glass-card.html',
  styleUrls: ['./glass-card.scss'],
  host: {
    class: 'glass-card',
    '[class.is-interactive]': 'interactive',
    '[attr.data-tone]': 'tone',
    '[attr.data-density]': 'density',
  },
})
export class GlassCardComponent {
  @Input() interactive = true;
  @Input() tone: 'default' | 'strong' | 'weak' = 'default';
  @Input() density: 'default' | 'compact' = 'default';
}
