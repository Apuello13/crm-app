import { inject, Injectable } from '@angular/core';
import { UserLogIn } from '../../auth/models/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private userKey: string = 'user';
  private _cookie: CookieService = inject(CookieService);
  setUser(user: UserLogIn): void {
    this._cookie.set(this.userKey, JSON.stringify(user));
  }

  getUser(): UserLogIn {
    return JSON.parse(this._cookie.get(this.userKey));
  }

  isExistSession(): boolean {
    return this._cookie.check(this.userKey);
  }

  deleteSession(): void {
    this._cookie.delete(this.userKey);
  }
}
