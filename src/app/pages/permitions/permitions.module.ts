import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermitionsRoutingModule } from './permitions-routing.module';
import { PermitionListComponent } from './permition-list/permition-list.component';
import { PermitionFormComponent } from './permition-form/permition-form.component';


@NgModule({
  declarations: [PermitionListComponent, PermitionFormComponent],
  imports: [
    CommonModule,
    PermitionsRoutingModule
  ]
})
export class PermitionsModule { }
