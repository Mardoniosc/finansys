import { Component, OnInit } from '@angular/core';
import { CategoryService, Category } from '../shared';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      (data) => (this.categories = data),
      (err) => console.error('Erro ao carregar Lista ', err)
    );
  }

  deleteCategory(category: Category) {
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.categoryService.delete(category.id).subscribe(
        (data) => {
          this.categories = this.categories.filter((x) => x != category);
        },
        (err) => alert('Erro ao tentar excluir!!')
      );
    }
  }
}
