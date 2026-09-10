import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home-page.component').then(
        (m) => m.HomePageComponent,
      ),
  },
  {
    path: 'cheatsheet',
    loadComponent: () =>
      import('./features/cheat-sheet/cheat-sheet-page.component').then(
        (m) => m.CheatSheetPageComponent,
      ),
  },
  {
    path: 'formatter',
    loadComponent: () =>
      import('./features/formatter/formatter-page.component').then(
        (m) => m.FormatterPageComponent,
      ),
  },
  {
    path: 'base64',
    loadComponent: () =>
      import('./features/base64/base64-page.component').then(
        (m) => m.Base64PageComponent,
      ),
  },
  { path: '**', redirectTo: '' },
];
