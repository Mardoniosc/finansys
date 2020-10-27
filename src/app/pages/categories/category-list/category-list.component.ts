import { Component } from '@angular/core';
import { CategoryService, Category } from '../shared';
import { BaseResourceListComponent } from 'src/app/shared';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent extends BaseResourceListComponent<Category> {
  constructor(protected categoryService: CategoryService) {
    super(categoryService);
  }
}
