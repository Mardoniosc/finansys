import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadCrumbComponent } from './components';

@NgModule({
  declarations: [BreadCrumbComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    // Módulos
    CommonModule,
    ReactiveFormsModule,

    // Components
    BreadCrumbComponent,
  ],
})
export class SharedModule {}
