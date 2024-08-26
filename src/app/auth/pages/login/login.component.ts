import { Component, Inject, inject, OnInit } from '@angular/core';
import { NavigationService } from '../../../core/services/navigation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  _navigator: NavigationService = inject(NavigationService);
  fb: FormBuilder = inject(FormBuilder);

  isShowPassword: boolean = false;

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    this._navigator.goTo('/home');
  }

  togglePassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }
}
