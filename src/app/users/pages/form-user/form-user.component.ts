import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../../core/services/alert.service';
import { BasicLook } from '../../../core/models/basic-look';
import { RoleService } from '../../services/role.service';
import { NavigationService } from '../../../core/services/navigation.service';
import { User } from '../../models/user';
import { AlertMessage } from '../../../utils/alert-message';
import { USER_MESSAGE } from '../../utils/user-message';
import { categories } from '../../utils/category';
import { interestRates } from '../../utils/interest-rates';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
})
export class FormUserComponent implements OnInit {
  _user: UserService = inject(UserService);
  _alert: AlertService = inject(AlertService);
  _role: RoleService = inject(RoleService);
  _navigation: NavigationService = inject(NavigationService);

  formBuild: FormBuilder = inject(FormBuilder);

  isEdit: boolean = false;
  isAdviser: boolean = true;
  isShowPassword: boolean = false;

  roles: BasicLook[] = [];
  categories = categories;
  interestRates = interestRates;

  userForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
    this.getRoles();
    this.getUserFromUrl();
  }

  initForm(): void {
    this.userForm = this.formBuild.group({
      id: 0,
      name: ['', Validators.required],
      username: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
      categories: { value: '', disabled: this.isAdviser },
      interestRates: { value: '', disabled: this.isAdviser },
    });
  }

  getUserFromUrl(): void {
    this._navigation.getValueFormQueryParam().subscribe({
      next: (param) => {
        const userId = param;
        if (userId) this.getUserById(+userId);
      },
    });
  }

  getUserById(userId: number): void {
    this._user.getUserById(userId).subscribe({
      next: (response) => {
        const { role, ...user } = response;
        const userForm = {
          ...user,
          role: role.id,
        };
        this.userForm.patchValue(userForm);
        this.isEdit = true;
      },
    });
  }

  getRoles(): void {
    this._role
      .findAll()
      .subscribe({ next: (response) => (this.roles = response) });
  }

  toggleIsAdviser({ value }: any): void {
    const roleValue: number = value;
    const ADMIN_ID: number = 1;
    this.isAdviser = roleValue !== ADMIN_ID;
    if (this.isAdviser) {
      this.userForm.get('categories')?.enable();
      this.userForm.get('interestRates')?.enable();
    } else {
      this.userForm.get('categories')?.disable();
      this.userForm.get('interestRates')?.disable();
    }
  }

  toggleIsPassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  save(): void {
    const { role: roleId, ...data } = this.userForm.value;
    const role: BasicLook | undefined = this.roles.find(
      (role) => role.id === roleId
    );
    const user: User = {
      role,
      ...data,
    };
    const message: string = this.getMessage();
    this._user[this.isEdit ? 'update' : 'save'](user).subscribe({
      next: () => {
        this._alert.success(message);
        this._navigation.goBack();
      },
    });
  }

  getMessage(): string {
    return this.isEdit ? USER_MESSAGE.UPDATE : USER_MESSAGE.SUCCESS;
  }
}
