import { inject, Injectable } from '@angular/core';
import { UserLogIn } from '../../auth/models/user';
import { CookieService } from 'ngx-cookie-service';
import { ROLE_CONTANTS } from '../../utils/role.constant';

@Injectable({ providedIn: 'root' })
export class SessionService {
  private userKey: string = 'user';
  private _cookie: CookieService = inject(CookieService);
  setUser(user: UserLogIn): void {
    this._cookie.set(this.userKey, JSON.stringify(user));
  }

  getUser(): UserLogIn | null {
    let userLogin!: UserLogIn | null;
    try {
      userLogin = JSON.parse(this._cookie.get(this.userKey));
    } catch (e) {
      userLogin = null;
    }
    return userLogin;
  }

  isExistSession(): boolean {
    return this._cookie.check(this.userKey);
  }

  deleteSession(): void {
    this._cookie.delete(this.userKey);
  }

  isAdmin(): boolean {
    const user: UserLogIn | null = this.getUser();
    const adminRoleId: number = ROLE_CONTANTS.ADMIN_ROLE;
    if (user) return user.role.id === adminRoleId;
    return false;
  }
}
