import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable()
export class ClientDataService {
  private clients: BehaviorSubject<Customer[]> = new BehaviorSubject(
    [] as Customer[]
  );

  setClients(customers: Customer[]): void {
    this.clients.next(customers);
  }

  getClients(): Observable<Customer[]> {
    return this.clients.asObservable();
  }
}
