import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';

export const bookRoutes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: ':id',
    component: ShowComponent,
  },
  {
    path: ':id/edit',
    component: UpdateComponent,
  },
];
