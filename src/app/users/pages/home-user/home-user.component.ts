import { Component, inject, OnInit } from '@angular/core';
import { Event } from '../../../shared/models/event';
import { Table } from '../../../shared/models/table';
import { Actions } from '../../../utils/actions';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../../core/services/alert.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
})
export class HomeUserComponent implements OnInit {
  _user: UserService = inject(UserService);
  _alert: AlertService = inject(AlertService);

  columns: Table[] = [
    { headerName: 'Nombre', field: 'name' },
    { headerName: 'Email', field: 'username' },
    { headerName: 'Acciones', field: 'id' },
  ];
  users: User[] = [];
  actions: string[] = [Actions.EDIT, Actions.DELETE];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this._user.getUsers().subscribe({
      next: (response) => {
        this.users = response;
      },
    });
  }

  getEventTable(action: Event): void {
    const { rowId, event } = action;
    if (event === Actions.DELETE) this.deleteUserById(rowId);
  }

  deleteUserById(userId: number): void {
    this._user.deleteById(userId).subscribe({
      next: () => {
        this._alert.success();
        this.users = this.users.filter((user) => user.id !== userId);
      },
    });
  }
}
