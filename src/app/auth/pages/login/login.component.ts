import { Component, Inject, inject, OnInit } from '@angular/core';
import { NavigationService } from '../../../core/services/navigation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../../core/services/alert.service';
import { SessionService } from '../../../core/services/session.service';
import { AlertMessage } from '../../../utils/alert-message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  _navigator: NavigationService = inject(NavigationService);
  _auth: AuthService = inject(AuthService);
  _alert: AlertService = inject(AlertService);
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
        this._alert.success(AlertMessage.WELCOME);
        this._navigator.goTo('/home');
      },
    });
  }

  togglePassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }
}
