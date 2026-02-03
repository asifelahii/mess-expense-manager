import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { GlassPanelComponent } from '../../../ui/glass-panel/glass-panel';
import { TahoeIcon } from '../../tahoe-icon/tahoe-icon';

type MenuKey = 'dashboard' | 'expense' | 'meal' | 'deposit' | 'members' | 'settings';

interface MenuItem {
  key: MenuKey;
  label: string;
  icon: MenuKey;
}

@Component({
  selector: 'app-left-sidebar',
  imports: [CommonModule, GlassPanelComponent, TahoeIcon],
  templateUrl: './left-sidebar.html',
  styleUrls: ['./left-sidebar.scss'],
})
export class LeftSidebar {
  name: string = 'Abdullah';
  role: string = 'Manager';

  // UI-only active state
  active: MenuKey = 'dashboard';

  menuItems: MenuItem[] = [
    { key: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { key: 'expense', label: 'Expense', icon: 'expense' },
    { key: 'meal', label: 'Meal', icon: 'meal' },
    { key: 'deposit', label: 'Deposit', icon: 'deposit' },
    { key: 'members', label: 'Members', icon: 'members' },
    { key: 'settings', label: 'Settings', icon: 'settings' },
  ];

  setActive(key: MenuKey) {
    this.active = key;
  }

  get avatartInitial(): string {
    return this.name ? this.name.charAt(0).toUpperCase() : '';
  }
}
