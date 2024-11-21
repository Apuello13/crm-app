import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

import { ClientsComponent } from './pages/clients/clients.component';
import { FilterComponent } from './components/filter/filter.component';
import { CardComponent } from './components/card/card.component';
import { GridComponent } from './components/grid/grid.component';
import { DialogCustomerComponent } from './components/dialog-customer/dialog-customer.component';
import { FormClientComponent } from './pages/form-client/form-client.component';

import { ClientService } from './services/client.service';
import { ClientDataService } from './services/client.data.service';
import { ObservationService } from './services/observation.service';
import { ObservationTreeComponent } from './components/observation-tree/observation-tree.component';

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
