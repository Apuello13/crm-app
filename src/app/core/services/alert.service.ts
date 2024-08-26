import { Injectable } from '@angular/core';
import { AlertMessage } from '../../utils/alert-message';
import Swal, { SweetAlertResult } from 'sweetalert2';

const confirmButtonText: string = 'Confirmar';
const cancelButtonText: string = 'Cancelar';

@Injectable({ providedIn: 'root' })
export class AlertService {
  success(text: string = AlertMessage.GENERAL_SUCCESS): void {
    Swal.fire({
      title: AlertMessage.SUCCESS_TITLE,
      text,
      icon: 'success',
      confirmButtonText,
    });
  }

  error(text: string = AlertMessage.GENERAL_ERROR): void {
    Swal.fire({
      title: AlertMessage.ERROR_TITLE,
      text,
      icon: 'error',
      confirmButtonText,
    });
  }

  confirm(
    text: string = AlertMessage.GENERAL_CONFIRM
  ): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      title: AlertMessage.INFORMATION_TITLE,
      text,
      icon: 'info',
      confirmButtonText,
      cancelButtonText,
      showCancelButton: true,
    });
  }
}
