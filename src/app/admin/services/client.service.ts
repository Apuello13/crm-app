import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Search } from '../models/search';
import { Customer } from '../models/customer';
import { UpdateStatus } from '../models/update-status';

@Injectable()
export class ClientService {
  private _http: HttpClient = inject(HttpClient);
  private clientUrl: string = `${environment.apiUrl}/customer`;

  search(search: Search) {
    return this._http.post<Customer[]>(`${this.clientUrl}/search`, search);
  }

  findById(customerId: number) {
    return this._http.get<Customer>(`${this.clientUrl}/${customerId}`);
  }

  deleteById(id: number) {
    return this._http.delete(`${this.clientUrl}/${id}`);
  }

  update(customer: Customer) {
    return this._http.put(this.clientUrl, customer);
  }

  updateStatus(customerId: number, updateStatus: UpdateStatus) {
    return this._http.patch(
      `${this.clientUrl}/status/${customerId}`,
      updateStatus
    );
  }

  updateCustomerNotDefinedTow(id: number) {
    return this._http.patch(
      `${this.clientUrl}/update-not-defined/customer/${id}`,
      {}
    );
  }
}
