
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
// import { BookDetailsComponent } from './book-details/book-details.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'authors/:id', component: AuthorDetailsComponent },

  {
    path: 'books',
    loadChildren: () =>
      import('./books/book.route').then((m) => m.bookRoutes),
  },
];

