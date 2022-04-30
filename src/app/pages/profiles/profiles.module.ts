import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [ProfileListComponent, ProfileFormComponent],
  imports: [CommonModule, ProfilesRoutingModule, SharedModule],
})
export class ProfilesModule {}
