import { ROUTES } from '../../utils/routes';
import { Access } from '../models/acces';

export const adminAccess: Access[] = [
  { id: 1, name: 'Home', icon: 'bx bxs-home-alt-2', path: ROUTES.HOME },
  { id: 2, name: 'Usuarios', icon: 'bx bxs-user', path: ROUTES.USERS },
  {
    id: 4,
    name: 'Reportes',
    icon: 'bx bxs-report',
    path: ROUTES.REPORTS,
  },
];
