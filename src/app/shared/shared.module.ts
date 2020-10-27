import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadCrumbComponent, PageHeaderComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreadCrumbComponent, PageHeaderComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    // Módulos
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    // Components
    BreadCrumbComponent,
    PageHeaderComponent,
  ],
})
export class SharedModule {}
