import { Component } from '@angular/core';
import { Table } from '../../../shared/models/table';
import { TypeView } from '../../models/typeView';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  typeView: TypeView = 'table';
  columns: Table[] = [
    { headerName: 'Nombre', field: 'name' },
    { headerName: 'Telefono', field: 'phone' },
    { headerName: 'Programa', field: 'program' },
    { headerName: 'Estado', field: 'status' },
    { headerName: 'Acciones', field: 'id' },
  ];

  toggleTypeView(): void {
    this.typeView = this.typeView === 'table' ? 'grid' : 'table';
  }
}
