import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ClientsComponent } from './pages/clients/clients.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardComponent } from './components/card/card.component';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  declarations: [ClientsComponent, FilterComponent, CardComponent, GridComponent],
  imports: [SharedModule, AdminRoutingModule],
})
export class AdminModule {}