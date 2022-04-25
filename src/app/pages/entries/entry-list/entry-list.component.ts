import { Component } from '@angular/core';
import { EntryService, Entry } from '../shared';
import { BaseResourceListComponent } from 'src/app/shared';
import { CategoryService } from '../../categories/shared';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
})
export class EntryListComponent extends BaseResourceListComponent<Entry> {
  categorias = [];

  constructor(protected entryService: EntryService, private categoryService: CategoryService) {
    super(entryService);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.categoryService.getAll().subscribe(
      data => this.categorias = data,
      err => console.log(err),
    );
  }

  getCategoria(id: number): string {
    const result = this.categorias.find(categoria => categoria.id === id);
    return result ? result.name : '';
  }
}
