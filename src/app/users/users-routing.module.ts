import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '../core/pages/layout/layout.component';
import { HomeUserComponent } from './pages/home-user/home-user.component';
import { FormUserComponent } from './pages/form-user/form-user.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeUserComponent },
      { path: 'form', component: FormUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
