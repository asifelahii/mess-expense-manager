import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
    '[attr.data-layout]': 'layout',
  },
})
export class GlassPanelComponent {
  @Input() interactive = false;
  @Input() density: 'default' | 'compact' = 'default';

  /**
   * default: uses internal header/body wrappers (for typical panels)
   * shell: lets consumers fully control layout (sidebar use-case)
   */
  @Input() layout: 'default' | 'shell' = 'default';
}
