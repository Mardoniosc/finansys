import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryFormComponent } from './category-form';
import { CategoryListComponent } from './category-list';

const routes: Routes = [
  { path: '', component: CategoryListComponent },
  { path: 'new', component: CategoryFormComponent },
  { path: ':id/edit', component: CategoryFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
