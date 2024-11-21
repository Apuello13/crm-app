import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { AlertService } from '../../../core/services/alert.service';
import { NavigationService } from '../../../core/services/navigation.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
})
export class FormClientComponent implements OnInit {
  _customer: ClientService = inject(ClientService);
  _alert: AlertService = inject(AlertService);
  _navigation: NavigationService = inject(NavigationService);

  formBuilder: FormBuilder = inject(FormBuilder);
  customerForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
    this.getParameterFromUrl();
  }

  initForm(): void {
    this.customerForm = this.formBuilder.group({
      id: 0,
      fullName: '',
      document: '',
      phone: '',
      city: '',
      neighborhood: '',
      program: '',
      category: '',
      status: '',
      whatsappPhone: '',
      createdAt: 0,
    });
  }

  getParameterFromUrl(): void {
    this._navigation.getValueFormQueryParam().subscribe({
      next: (param) => {
        const customerId = param;
        if (customerId) this.findUserById(+customerId);
      },
    });
  }

  findUserById(customerId: number): void {
    this._customer.findById(customerId).subscribe({
      next: (response) => this.customerForm.patchValue(response),
    });
  }

  update(): void {
    this._customer.update(this.customerForm.value).subscribe({
      next: () => {
        this._alert.success();
        this._navigation.goBack();
      },
    });
  }
}
