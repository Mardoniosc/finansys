import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { EntriesRoutingModule } from './entries-routing.module';

import { CalendarModule } from 'primeng/calendar';
import { IMaskModule } from 'angular-imask';

import { EntryListComponent } from './entry-list';
import { EntryFormComponent } from './entry-form';
@NgModule({
  declarations: [EntryListComponent, EntryFormComponent],
  imports: [
    CommonModule,
    CalendarModule,
    IMaskModule,
    EntriesRoutingModule,
    ReactiveFormsModule,
  ],
})
export class EntriesModule {}
