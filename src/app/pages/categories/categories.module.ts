import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list';
import { CategoryFormComponent } from './category-form';

@NgModule({
  declarations: [CategoryListComponent, CategoryFormComponent],
  imports: [CategoriesRoutingModule, SharedModule],
})
export class CategoriesModule {}
