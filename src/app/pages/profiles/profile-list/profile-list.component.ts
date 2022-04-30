import { Component, OnInit } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared';
import { Profile, ProfileService } from '../shared';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent extends BaseResourceListComponent<Profile> {
  constructor(protected profileService: ProfileService) {
    super(profileService);
  }
}
