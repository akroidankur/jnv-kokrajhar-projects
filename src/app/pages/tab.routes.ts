import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full'
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./projects/projects.page').then(m => m.ProjectsPage)
  },
  {
    path: 'achievements',
    loadComponent: () =>
      import('./achievements/achievements.page').then(m => m.AchievementsPage)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.page').then(m => m.AboutPage)
  },
];
