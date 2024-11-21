import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { SessionService } from './session.service';
import { inject } from '@angular/core';
import { UserLogIn } from '../../auth/models/user';

export const tokenInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const _session: SessionService = inject(SessionService);
  let user: UserLogIn | null = _session.getUser();
  if (user) {
    req = req.clone({
      setHeaders: {
        authorization: `Bearer ${user.token}`,
      },
    });
  }
  return next(req);
};
