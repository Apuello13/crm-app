import { State } from '../core/models/state';

export const STATUS = [
  { key: 'INTERESTED', value: 'Interesado', color: '' },
  { key: 'HUNG_UP', value: 'Colgo', color: '' },
  { key: 'NOT_INTERESTED', value: 'No interesado', color: '' },
  { key: 'ENROLLMENT', value: 'Matriculado', color: '' },
  { key: 'OFF', value: 'Apagado', color: '' },
  { key: 'NOT_ANSWER', value: 'No respondio', color: '' },
  { key: 'CALL_LATER', value: 'Llama despues', color: '' },
  { key: 'RELATIVE_ANSWERED', value: 'Contesto un familiar', color: '' },
  { key: 'NEW', value: 'Nuevo', color: '' },
] as State[];
