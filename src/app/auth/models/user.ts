import { BasicLook } from '../../core/models/basic-look';

export interface UserLogIn {
  id: number;
  name: string;
  token: string;
  role: BasicLook;
}
