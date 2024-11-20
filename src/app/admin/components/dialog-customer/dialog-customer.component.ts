import { Component, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  _closeDialogVia,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { AlertService } from '../../../core/services/alert.service';
import { Customer } from '../../models/customer';
import { CustomerObservation } from '../../models/customer-observation';
import { Observation } from '../../models/observation';
import { ObservationService } from '../../services/observation.service';
import { STATUS } from '../../../utils/status';
import { State } from '../../../core/models/state';
import { ClientService } from '../../services/client.service';
import { AlertMessage } from '../../../utils/alert-message';
import { UpdateStatus } from '../../models/update-status';
import { NavigationService } from '../../../core/services/navigation.service';
import { getCompleteCategory } from '../../../shared/utils/get-complete-category';
import { getCompleteInterestRate } from '../../../shared/utils/get-complete-interest-rate';

@Component({
  selector: 'app-dialog-customer',
  templateUrl: './dialog-customer.component.html',
})
export class DialogCustomerComponent implements OnInit {
  customer = inject(MAT_DIALOG_DATA) as Customer;
  dialogRef: MatDialogRef<DialogCustomerComponent> = inject(MatDialogRef);

  _observation: ObservationService = inject(ObservationService);
  _alert: AlertService = inject(AlertService);
  _customer: ClientService = inject(ClientService);
  _navigation: NavigationService = inject(NavigationService);

  observationField: FormControl = new FormControl('');
  statusField: FormControl = new FormControl(this.customer.status);

  observations: CustomerObservation[] = [];

  states: State[] = STATUS;

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

  updateStatus({ value }: any): void {
    const updateStatus: UpdateStatus = { status: value };
    this._customer.updateStatus(this.customer.id, updateStatus).subscribe({
      next: () => {
        this._alert.success(AlertMessage.CUSTOMER_UPDATE_STATUS);
        this.goToForm(value);
      },
    });
  }

  updateCustomerNotDefinedTwo(): void {
    this._alert.confirm().then((result) => {
      if (result.isConfirmed) {
        const customerId: number = this.customer.id;
        this._customer.updateCustomerNotDefinedTow(customerId).subscribe({
          next: () => this._alert.success(),
        });
      }
    });
  }

  goToForm(status: string): void {
    const ENROLLMENT_STATUS: string = 'ENROLLMENT';
    if (status === ENROLLMENT_STATUS) {
      this.closeDialog();
      this._navigation.goToWithQueryParams('/clients/form', this.customer.id);
    }
  }

  getCompleteCategory(key: string): string {
    return getCompleteCategory(key);
  }

  getCompleteInterestRate(key: string): string {
    return getCompleteInterestRate(key);
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
        this.getObservations();
      },
    });
  }

  deleteById(id: string): void {
    this._observation
      .deleteById(id)
      .subscribe({ next: () => this.getObservations() });
  }
}
