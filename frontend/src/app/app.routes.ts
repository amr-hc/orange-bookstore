
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'books',
    loadChildren: () =>
      import('./books/book.route').then((m) => m.bookRoutes),
  },
  {
    path: 'authors',
    loadChildren: () =>
      import('./authors/author.route').then((m) => m.authorRoutes),
  },
];

