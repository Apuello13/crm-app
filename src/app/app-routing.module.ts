import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/pages/login/login.component';
import { NotFoundComponent } from './core/pages/404/404.component';
import { LayoutComponent } from './core/pages/layout/layout.component';
import { HomeComponent } from './core/pages/home/home.component';
import { authGuard } from './admin/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'home', component: HomeComponent }],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((u) => u.UsersModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./admin/admin.module').then((a) => a.AdminModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
