import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'questions',
    loadComponent: () => import('./questions/questions.component').then( m => m.QuestionsComponent)
  },
  {
    path: 'history',
    loadComponent: () => import('./history/history.component').then( m => m.HistoryComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
