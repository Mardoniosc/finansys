import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports';

@NgModule({
  declarations: [ReportsComponent],
  imports: [SharedModule, ReportsRoutingModule],
})
export class ReportsModule {}
