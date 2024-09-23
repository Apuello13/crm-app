import { Component, inject, OnInit } from '@angular/core';
import { Table } from '../../../shared/models/table';
import { TypeView } from '../../models/typeView';
import { ClientDataService } from '../../services/client.data.service';
import { Customer } from '../../models/customer';
import { Actions } from '../../../utils/actions';
import { Event } from '../../../shared/models/event';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogCustomerComponent } from '../../components/dialog-customer/dialog-customer.component';
import { ClientService } from '../../services/client.service';
import { AlertService } from '../../../core/services/alert.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent implements OnInit {
  _clientData: ClientDataService = inject(ClientDataService);
  _client: ClientService = inject(ClientService);
  _dialog: MatDialog = inject(MatDialog);
  _alert: AlertService = inject(AlertService);

  customers: Customer[] = [];

  actions: string[] = [Actions.EDIT, Actions.VIEW, Actions.DELETE];

  typeView: TypeView = 'table';
  columns: Table[] = [
    { headerName: 'Nombre', field: 'fullName' },
    { headerName: 'Numero WhatsApp', field: 'whatsappPhone' },
    { headerName: 'Fecha de creacion', field: 'createdAt', isDate: true },
    { headerName: 'Estado', field: 'status', isStatus: true },
    { headerName: 'Acciones', field: 'id' },
  ];

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this._clientData
      .getClients()
      .subscribe({ next: (response) => (this.customers = response) });
  }

  getEvent(action: Event): void {
    const { event, row, rowId } = action;
    if (event === Actions.VIEW) this.openDialog(row);
    else if (event === Actions.DELETE) this.deleteCustomer(rowId);
  }

  deleteCustomer(customerId: number): void {
    this._client.deleteById(customerId).subscribe({
      next: () => {
        this.customers = this.customers.filter(
          (customer) => customer.id !== customerId
        );
        this._alert.success();
      },
    });
  }

  openDialog(customer: Customer): void {
    const dialogConfig: MatDialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = '60vw';
    dialogConfig.minHeight = '40vw';
    dialogConfig.data = customer;
    this._dialog.open(DialogCustomerComponent, dialogConfig);
  }

  toggleTypeView(): void {
    this.typeView = this.typeView === 'table' ? 'grid' : 'table';
  }
}
