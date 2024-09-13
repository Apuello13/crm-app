import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';

import { ClientsComponent } from './pages/clients/clients.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardComponent } from './components/card/card.component';
import { GridComponent } from './components/grid/grid.component';
import { DialogCustomerComponent } from './components/dialog-customer/dialog-customer.component';

import { ClientService } from './services/client.service';
import { ClientDataService } from './services/client.data.service';

@NgModule({
  declarations: [
    ClientsComponent,
    FilterComponent,
    CardComponent,
    GridComponent,
    DialogCustomerComponent,
  ],
  imports: [SharedModule, AdminRoutingModule, MatDialogModule],
  providers: [ClientService, ClientDataService],
})
export class AdminModule {}
