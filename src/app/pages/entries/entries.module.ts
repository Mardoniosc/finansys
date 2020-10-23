import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';

import { EntriesRoutingModule } from './entries-routing.module';

import { CalendarModule } from 'primeng/calendar';
import { IMaskModule } from 'angular-imask';

import { EntryListComponent } from './entry-list';
import { EntryFormComponent } from './entry-form';
@NgModule({
  declarations: [EntryListComponent, EntryFormComponent],
  imports: [SharedModule, CalendarModule, IMaskModule, EntriesRoutingModule],
})
export class EntriesModule {}
