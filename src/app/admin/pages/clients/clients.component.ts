import { Component, inject, OnInit } from '@angular/core';
import { Table } from '../../../shared/models/table';
import { TypeView } from '../../models/typeView';
import { ClientDataService } from '../../services/client.data.service';
import { Customer } from '../../models/customer';
import { Actions } from '../../../utils/actions';
import { Event } from '../../../shared/models/event';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent implements OnInit {
  _clientData: ClientDataService = inject(ClientDataService);

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

  deleteCustomer(customerId: number): void {}

  openDialog(customer: Customer): void {}

  toggleTypeView(): void {
    this.typeView = this.typeView === 'table' ? 'grid' : 'table';
  }
}
