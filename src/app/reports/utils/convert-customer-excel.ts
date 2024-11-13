import { Customer } from '../../admin/models/customer';
import { getCompleteCategory } from '../../shared/utils/get-complete-category';
import { setCompleteStatus } from '../../shared/utils/set-complete-status';
import { CustomerExcel } from '../models/customer-excel';

export default (customers: Customer[]): CustomerExcel[] => {
  return customers.map((customer) => {
    return {
      Nombre: customer.fullName,
      Celular: customer.phone,
      Barrio: customer.neighborhood,
      Numero_WhatsApp: customer.whatsappPhone,
      Programa: customer.program,
      Estado: setCompleteStatus(customer.status),
      Categoria: getCompleteCategory(customer.category),
      Fecha_Creacion: new Date(customer.createdAt).toDateString(),
      Validado_Yinn: customer.approvedYinn ? 'Si' : 'No',
    };
  });
};
