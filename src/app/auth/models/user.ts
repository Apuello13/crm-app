import { BasicLook } from '../../core/models/basic-look';

export interface UserLogIn {
  name: string;
  token: string;
  role: BasicLook;
}
