import { Component, inject } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  _alert: AlertService = inject(AlertService);
  _navigation: NavigationService = inject(NavigationService);

  userName: string = '';

  logOut(): void {
    this._alert.confirm().then((result) => {
      if (result.isConfirmed) {
        this._navigation.goTo('/login');
      }
    });
  }
}
