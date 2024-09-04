import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AlertService } from './alert.service';

export const errorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const _alert: AlertService = inject(AlertService);
  const handleError = (error: HttpErrorResponse) => {
    _alert.error(error.error?.message);
  };
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      handleError(error);
      return throwError(error);
    })
  );
};
