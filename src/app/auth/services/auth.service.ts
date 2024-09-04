import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Login } from '../models/login';
import { HttpClient } from '@angular/common/http';
import { UserLogIn } from '../models/user';

@Injectable()
export class AuthService {
  private authUrl: string = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(login: Login) {
    return this.http.post<UserLogIn>(`${this.authUrl}/login`, login);
  }
}
