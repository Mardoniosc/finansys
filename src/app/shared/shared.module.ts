import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  BreadCrumbComponent,
  PageHeaderComponent,
  FormFieldErrorComponent,
} from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    // Módulos
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    // Components
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorComponent,
  ],
})
export class SharedModule {}
