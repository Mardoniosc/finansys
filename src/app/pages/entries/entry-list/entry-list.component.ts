import { Component, OnInit } from '@angular/core';
import { EntryService, Entry } from '../shared';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
})
export class EntryListComponent implements OnInit {
  entries: Entry[] = [];

  constructor(private entryService: EntryService) {}

  ngOnInit() {
    this.entryService.getAll().subscribe(
      (entries) => (this.entries = entries.sort((a, b) => b.id - a.id)),
      (error) => alert('Erro ao carregar a lista' + error)
    );
  }

  deleteEntry(entry: Entry) {
    const mustDelete = confirm('Deseja realmente excluir este item?');
    if (mustDelete) {
      this.entryService.delete(entry.id).subscribe(
        () =>
          (this.entries = this.entries.filter((element) => element !== entry)),
        () => alert('Erro na exclusão')
      );
    }
  }
}
