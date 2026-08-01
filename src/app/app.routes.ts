import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/tab.routes').then(m => m.routes),
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'tabs',
    pathMatch: 'full',
  }
];
