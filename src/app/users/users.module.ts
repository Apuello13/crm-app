import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FormUserComponent } from './pages/form-user/form-user.component';
import { HomeUserComponent } from './pages/home-user/home-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserService } from './services/user.service';
import { RoleService } from './services/role.service';

@NgModule({
  declarations: [HomeUserComponent, FormUserComponent],
  imports: [SharedModule, UsersRoutingModule],
  providers: [UserService, RoleService],
})
export class UsersModule {}
