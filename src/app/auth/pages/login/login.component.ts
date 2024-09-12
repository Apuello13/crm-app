import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from '../../../core/services/navigation.service';
import { SessionService } from '../../../core/services/session.service';
import { AuthService } from '../../services/auth.service';
import { ROUTES } from '../../../utils/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  _navigator: NavigationService = inject(NavigationService);
  _auth: AuthService = inject(AuthService);
  _session: SessionService = inject(SessionService);

  fb: FormBuilder = inject(FormBuilder);

  isShowPassword: boolean = false;

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    this._auth.login(this.loginForm.value).subscribe({
      next: (response) => {
        this._session.setUser(response);
        this._navigator.goTo(ROUTES.HOME);
      },
    });
  }

  togglePassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }
}
