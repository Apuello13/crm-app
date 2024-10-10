import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../../users/models/user';
import { Search } from '../../admin/models/search';
import { Customer } from '../../admin/models/customer';

@Injectable()
export class ReportService {
  private reportUrl: string = `${environment.apiUrl}/report`;
  private _http: HttpClient = inject(HttpClient);

  getAdvisers() {
    return this._http.get<User[]>(`${this.reportUrl}/adviser`);
  }

  generateReport(filters: Search) {
    return this._http.post<Customer[]>(
      `${this.reportUrl}/generate-report`,
      filters
    );
  }
}
