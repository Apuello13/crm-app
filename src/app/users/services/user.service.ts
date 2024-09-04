import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {
  private userUrl: string = `${environment.apiUrl}/users`;
  private _http: HttpClient = inject(HttpClient);

  getUsers() {
    return this._http.get<User[]>(this.userUrl);
  }

  getUserById(id: number) {
    return this._http.get<User>(`${this.userUrl}/${id}`);
  }

  save(user: User) {
    return this._http.post(this.userUrl, user);
  }

  update(user: User) {
    return this._http.put(this.userUrl, user);
  }

  deleteById(id: number) {
    return this._http.delete(`${this.userUrl}/${id}`);
  }
}
