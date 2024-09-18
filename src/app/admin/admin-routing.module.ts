import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '../core/pages/layout/layout.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { FormClientComponent } from './pages/form-client/form-client.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ClientsComponent },
      { path: 'form', component: FormClientComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
