import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Search } from '../models/search';
import { Customer } from '../models/customer';

@Injectable()
export class ClientService {
  private _http: HttpClient = inject(HttpClient);
  private clientUrl: string = `${environment.apiUrl}/customer`;

  search(search: Search) {
    return this._http.post<Customer[]>(`${this.clientUrl}/search`, search);
  }
}
