import { Component, inject } from '@angular/core';
import { Customer } from '../../models/customer';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-customer',
  templateUrl: './dialog-customer.component.html',
})
export class DialogCustomerComponent {
  customer = inject(MAT_DIALOG_DATA);
  dialogRef: MatDialogRef<DialogCustomerComponent> = inject(MatDialogRef);

  closeDialog(): void {
    this.dialogRef.close();
  }
}
