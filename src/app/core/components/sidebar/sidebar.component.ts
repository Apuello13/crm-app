import { Component, Input, OnInit } from '@angular/core';
import { Access } from '../../models/acces';

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
      { id: 1, name: 'Home', icon: 'bx bxs-home-alt-2', path: '/home' },
      { id: 2, name: 'Usuarios', icon: 'bx bxs-user', path: '/users' },
      {
        id: 3,
        name: 'Clientes',
        icon: 'bx bxs-user-account',
        path: '/clients',
      },
    ];
  }
}
