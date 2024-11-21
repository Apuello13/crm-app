import { Component, inject, OnInit } from '@angular/core';

import { AlertService } from '../../services/alert.service';
import { NavigationService } from '../../services/navigation.service';
import { SessionService } from '../../services/session.service';
import { UserLogIn } from '../../../auth/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  _alert: AlertService = inject(AlertService);
  _navigation: NavigationService = inject(NavigationService);
  _session: SessionService = inject(SessionService);

  userName: string = '';

  ngOnInit(): void {
    this.getUserSession();
  }

  getUserSession(): void {
    const userLogin: UserLogIn | null = this._session.getUser();
    if (userLogin) this.userName = userLogin.name;
  }

  logOut(): void {
    this._alert.confirm().then((result) => {
      if (result.isConfirmed) {
        this._session.deleteSession();
        this._navigation.goTo('/login');
      }
    });
  }
}
