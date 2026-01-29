import { Component } from '@angular/core';
import { GlassPanelComponent } from '../../ui/glass-panel/glass-panel';
import { GlassCardComponent } from '../../ui/glass-card/glass-card';

@Component({
  selector: 'app-navbar',
  imports: [GlassPanelComponent, GlassPanelComponent, GlassCardComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

}
