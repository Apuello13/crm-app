import { Component, OnInit } from '@angular/core';
import { Table } from '../../../shared/models/table';
import { Actions } from '../../../utils/actions';
import { User } from '../../models/user';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
})
export class HomeUserComponent implements OnInit {
  columns: Table[] = [
    { headerName: 'Nombre', field: 'name' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Acciones', field: 'id' },
  ];
  user: User[] = [];
  actions: string[] = [Actions.EDIT, Actions.VIEW, Actions.DELETE];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {}
}
