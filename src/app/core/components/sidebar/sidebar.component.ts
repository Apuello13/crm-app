import { Component, Input, OnInit } from '@angular/core';
import { Access } from '../../models/acces';
import { ROUTES } from '../../../utils/routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  @Input() isMobile: boolean = false;
  menus: Access[] = [];

  isVisibleSettingModule: boolean = false;

  ngOnInit(): void {
    this.setAccess();
  }

  setAccess(): void {
    this.menus = [
      { id: 1, name: 'Home', icon: 'bx bxs-home-alt-2', path: ROUTES.HOME },
      { id: 2, name: 'Usuarios', icon: 'bx bxs-user', path: ROUTES.USERS },
      {
        id: 3,
        name: 'Clientes',
        icon: 'bx bxs-user-account',
        path: ROUTES.CUSTOMERS,
      },
    ];
  }
}
