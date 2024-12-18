import { BasicLook } from '../../core/models/basic-look';

export interface User {
  id: number;
  name: string;
  username: string;
  password: string;
  role: BasicLook;
}
