import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/messes',
    pathMatch: 'full'
  },
  {
    path: 'messes',
    loadComponent: () => import('./pages/messes/messes.component').then(m => m.MessesComponent)
  },
  {
    path: 'mess/:id/month/:month',
    loadComponent: () => import('./pages/month-details/month-details.component').then(m => m.MonthDetailsComponent)
  }
];
