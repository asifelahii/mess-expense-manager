import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type TahoeIconName =
  | 'dashboard'
  | 'expense'
  | 'meal'
  | 'deposit'
  | 'members'
  | 'settings'
  | 'logout'
  | 'exit';

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
