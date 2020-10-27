import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadCrumbComponent } from './components';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [BreadCrumbComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    // Módulos
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    // Components
    BreadCrumbComponent,
  ],
})
export class SharedModule {}
