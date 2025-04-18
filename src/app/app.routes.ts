import { Routes } from '@angular/router';
import { BaseComponent } from './layout/base/base.component';

export const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./layout/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'about',
        loadComponent: () => import('./layout/about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'research',
        loadComponent: () => import('./layout/research/research.component').then((m) => m.ResearchComponent),
      },
      {
        path: 'personal',
        loadComponent: () => import('./layout/personal-projects/personal-projects.component').then((m) => m.PersonalProjectsComponent),
      },
      {
        path: 'westminster',
        loadComponent: () => import('./layout/westminster-projects/westminster-projects.component').then((m) => m.WestminsterProjectsComponent),
      },
      {
        path: 'contact',
        loadComponent: () => import('./layout/contact/contact.component').then((m) => m.ContactComponent),
      },
    ],
  },
];
