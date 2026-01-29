import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-glass-pill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glass-pill.html',
  styleUrls: ['./glass-pill.scss'],
  host: {
    class: 'glass-pill',
    '[class.is-active]': 'active',
    '[class.is-danger]': 'tone === "danger"',
  },
})
export class GlassPillComponent {
  @Input() active = false;
  @Input() tone: 'default' | 'danger' = 'default';
}
