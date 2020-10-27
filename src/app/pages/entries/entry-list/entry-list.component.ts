import { Component } from '@angular/core';
import { EntryService, Entry } from '../shared';
import { BaseResourceListComponent } from 'src/app/shared';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
})
export class EntryListComponent extends BaseResourceListComponent<Entry> {
  constructor(protected entryService: EntryService) {
    super(entryService);
  }
}
