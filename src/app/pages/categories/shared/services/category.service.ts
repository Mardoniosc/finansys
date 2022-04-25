import { Injectable, Injector } from '@angular/core';

import { Category } from '../models';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { environment as env } from "src/environments/environment";


@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseResourceService<Category> {
  constructor(protected injector: Injector) {
    super(env.baseURL + '/categories.php', injector, Category.fromJson);
  }
}
