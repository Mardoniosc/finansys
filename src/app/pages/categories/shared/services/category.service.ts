import { Injectable } from '@angular/core';

import { Category } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiPath: string = 'api/categories';
  constructor() {}

}
