import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { EntriesRoutingModule } from './entries-routing.module';

import { EntryListComponent } from './entry-list';
import { EntryFormComponent } from './entry-form';
@NgModule({
  declarations: [EntryListComponent, EntryFormComponent],
  imports: [CommonModule, EntriesRoutingModule, ReactiveFormsModule],
})
export class EntriesModule {}
