import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

import { CardComponent } from './components/card/card.component';
import { DialogCustomerComponent } from './components/dialog-customer/dialog-customer.component';
import { FilterComponent } from './components/filter/filter.component';
import { GridComponent } from './components/grid/grid.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { FormClientComponent } from './pages/form-client/form-client.component';

import { ObservationTreeComponent } from './components/observation-tree/observation-tree.component';
import { ClientDataService } from './services/client.data.service';
import { ClientService } from './services/client.service';
import { ObservationService } from './services/observation.service';

@NgModule({
  declarations: [
    ClientsComponent,
    FilterComponent,
    CardComponent,
    GridComponent,
    DialogCustomerComponent,
    FormClientComponent,
    ObservationTreeComponent,
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    MatDialogModule,
    MatTabsModule,
    MatExpansionModule,
  ],
  providers: [ClientService, ClientDataService, ObservationService],
})
export class AdminModule {}
