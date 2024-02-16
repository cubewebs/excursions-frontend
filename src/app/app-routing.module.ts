import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcursionListComponent } from './pages/excursion-list/excursion-list.component';
import { AddEditExcursionComponent } from './pages/add-edit-excursion/add-edit-excursion.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ExcursionListComponent,
  },
  {
    path: 'add',
    component: AddEditExcursionComponent,
  },
  {
    path: 'edit:id',
    component: AddEditExcursionComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
