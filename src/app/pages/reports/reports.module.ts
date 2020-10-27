import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';

import { ChartModule } from 'primeng/chart';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports';

@NgModule({
  declarations: [ReportsComponent],
  imports: [SharedModule, ReportsRoutingModule, ChartModule],
})
export class ReportsModule {}
