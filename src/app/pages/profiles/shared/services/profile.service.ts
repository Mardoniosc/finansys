import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared';
import { Profile } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseResourceService<Profile> {
  constructor(protected injector: Injector) {
    super('api/profiles', injector, Profile.fromJson);
  }
}
