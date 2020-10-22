import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list';
import { CategoryFormComponent } from './category-form';

@NgModule({
  declarations: [CategoryListComponent, CategoryFormComponent],
  imports: [CommonModule, CategoriesRoutingModule, ReactiveFormsModule],
})
export class CategoriesModule {}
