import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FormUserComponent } from './pages/form-user/form-user.component';
import { HomeUserComponent } from './pages/home-user/home-user.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [HomeUserComponent, FormUserComponent],
  imports: [SharedModule, UsersRoutingModule],
})
export class UsersModule {}
