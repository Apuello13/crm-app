import { Component, inject } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-404',
  templateUrl: './404.component.html',
  styleUrl: './404.component.scss',
})
export class NotFoundComponent {
  _navigation: NavigationService = inject(NavigationService);

  goHome(): void {
    this._navigation.goTo('/home');
  }
}
