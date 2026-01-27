import { Routes } from '@angular/router';

import { Layout } from '../components/layout/layout';

export const LayoutRoutes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },

      {path: 'dashboard',
        loadComponent: () => import('../../features/dashboard/dashboard').then((m) => m.Dashboard),
      },

      {
        path: 'messes',
        loadComponent: () => import('../../features/messes/messes').then((m) => m.Messes),
      },

      {
        path: 'mess/:id/month/:yearMonth',
        loadComponent: () => import('../../features/month/month').then((m) => m.Month),
      },

      {
        path: 'settings',
        loadComponent: () => import('../../features/settings/settings').then((m) => m.Settings),
      },

      {
        path: 'not-found',
        loadComponent: () => import('../../features/not-found/not-found').then((m) => m.NotFound),
      },

      {
        path: '**',
        redirectTo: 'not-found', // redirects to 404 page, in case of invalid routes
      },
    ],
  },
];
