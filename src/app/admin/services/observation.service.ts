import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observation } from '../models/observation';
import { CustomerObservation } from '../models/customer-observation';

@Injectable()
export class ObservationService {
  private _http: HttpClient = inject(HttpClient);
  private observationUrl: string = `${environment.apiUrl}/observation`;

  save(observation: Observation) {
    return this._http.post(this.observationUrl, observation);
  }

  getByCustomer(customerId: number) {
    return this._http.get<CustomerObservation[]>(
      `${this.observationUrl}/customer/${customerId}`
    );
  }

  deleteById(id: number) {
    return this._http.delete(`${this.observationUrl}/${id}`);
  }
}
