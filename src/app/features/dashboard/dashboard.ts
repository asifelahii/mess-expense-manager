import { Component, OnDestroy, OnInit } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { GlassCardComponent } from '../../shared/ui/glass-card/glass-card';
import { LeftSidebar } from '../../shared/components/left-sidebar/left-sidebar';

@Component({
  selector: 'app-dashboard',
  imports: [LeftSidebar],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class Dashboard implements OnInit, OnDestroy {
  ngOnInit(): void {
    document.documentElement.removeAttribute('data-theme');
    // document.documentElement.setAttribute('data-theme', 'tahoe');
  }
  ngOnDestroy(): void {
    document.documentElement.removeAttribute('data-theme');
  }

  toggleTheme() {
    const root = document.documentElement;
    const isTahoe = root.getAttribute('data-theme') === 'tahoe';
    if (isTahoe)
      root.removeAttribute('data-theme'); // back to Aurora dark
    else root.setAttribute('data-theme', 'tahoe'); // light Tahoe
  }
}
