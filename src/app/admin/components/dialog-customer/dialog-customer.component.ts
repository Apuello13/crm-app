import { Component, inject, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ObservationService } from '../../services/observation.service';
import { FormControl } from '@angular/forms';
import { Observation } from '../../models/observation';
import { AlertService } from '../../../core/services/alert.service';
import { CustomerObservation } from '../../models/customer-observation';

@Component({
  selector: 'app-dialog-customer',
  templateUrl: './dialog-customer.component.html',
})
export class DialogCustomerComponent implements OnInit {
  customer = inject(MAT_DIALOG_DATA) as Customer;
  dialogRef: MatDialogRef<DialogCustomerComponent> = inject(MatDialogRef);

  observationField: FormControl = new FormControl('');

  observations: CustomerObservation[] = [];

  _observation: ObservationService = inject(ObservationService);
  _alert: AlertService = inject(AlertService);

  ngOnInit(): void {
    this.getObservations();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  getObservations(): void {
    this._observation.getByCustomer(this.customer.id).subscribe({
      next: (response) => (this.observations = response),
    });
  }

  save(): void {
    const { id, fullName } = this.customer;
    const observation: Observation = {
      customer: { id, name: fullName },
      observation: this.observationField.value,
    };
    this._observation.save(observation).subscribe({
      next: () => {
        this._alert.success();
        this.observationField.reset();
      },
    });
  }
}
