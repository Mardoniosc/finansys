import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BreadCrumbComponent,
  PageHeaderComponent,
  FormFieldErrorComponent,
  ServerErrorMessagesComponent,
} from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorComponent,
    ServerErrorMessagesComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    // Módulos
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    // Components
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorComponent,
    ServerErrorMessagesComponent,
  ],
})
export class SharedModule {}
