import { Routes } from '@angular/router';
import { HeadTags } from '@jaimemartinmartin15/jei-devkit-angular-shared';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
  {
    path: 'sopa-maravilla',
    children: [
      {
        path: '',
        loadComponent: () => import('../recipes/sopa-maravilla/sopa-maravilla.component').then((m) => m.SopaMaravillaComponent),
        data: {
          headTags: {
            metaDescription: 'Como preparar una sopa de lluvia con caldo de cocido.',
            metaKeywords: ['sopa', 'maravilla', 'mercadona', 'caldo', 'cocido'],
            linkRelCanonical: 'https://recetas.jaimeelingeniero.es/sopa-maravilla',
          } as HeadTags,
        },
      },
      { path: '**', redirectTo: '' },
    ],
  },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', redirectTo: '' },
];
