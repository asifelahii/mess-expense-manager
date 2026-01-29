import { Component, OnDestroy, OnInit } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { GlassCardComponent } from '../../shared/ui/glass-card/glass-card';

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, GlassCardComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit, OnDestroy {
  ngOnInit(): void {
    document.documentElement.setAttribute('data-theme', 'tahoe');
  }
  ngOnDestroy(): void {
    document.documentElement.removeAttribute('data-theme');
  }
}
