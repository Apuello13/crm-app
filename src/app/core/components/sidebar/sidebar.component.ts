import { Component, inject, Input, OnInit } from '@angular/core';
import { Access } from '../../models/acces';
import { ROUTES } from '../../../utils/routes';
import { SessionService } from '../../services/session.service';
import { accessAdviser } from '../../utils/access-adviser';
import { adminAccess } from '../../utils/access-admin';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  @Input() isMobile: boolean = false;
  menus: Access[] = [];

  _session: SessionService = inject(SessionService);

  isVisibleSettingModule: boolean = false;

  ngOnInit(): void {
    this.setAccess();
  }

  setAccess(): void {
    const isAdmin: boolean = this._session.isAdmin();
    const access: Access[] = isAdmin
      ? adminAccess.concat(accessAdviser)
      : accessAdviser;
    this.menus = access;
  }
}
