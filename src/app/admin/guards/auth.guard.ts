import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../../core/services/session.service';
import { inject } from '@angular/core';
import { AlertService } from '../../core/services/alert.service';
import { AlertMessage } from '../../utils/alert-message';

export const authGuard: CanActivateFn = (route, state) => {
  const _session: SessionService = inject(SessionService);
  const _alert: AlertService = inject(AlertService);
  const router: Router = inject(Router);
  const hasAccess: boolean = _session.isExistSession();
  if (!hasAccess) {
    router.navigate(['/login']);
    _alert.error(AlertMessage.FORBIDEN);
  }
  return hasAccess;
};
