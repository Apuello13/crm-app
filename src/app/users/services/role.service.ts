import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BasicLook } from '../../core/models/basic-look';

@Injectable()
export class RoleService {
  private roleUrl: string = `${environment.apiUrl}/role`;

  private _http: HttpClient = inject(HttpClient);

  findAll() {
    return this._http.get<BasicLook[]>(this.roleUrl);
  }
}
