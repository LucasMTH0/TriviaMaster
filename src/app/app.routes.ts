import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'select-category',
    loadComponent: () => import('./pages/select-category/select-category.component').then( m => m.SelectCategoryComponent)
  },
  {
    path: 'questions',
    loadComponent: () => import('./pages/questions/questions.component').then( m => m.QuestionsComponent)
  },
  {
    path: 'history',
    loadComponent: () => import('./pages/history/history.component').then( m => m.HistoryComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
