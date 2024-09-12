import { State } from '../../core/models/state';
import { STATUS } from '../../utils/status';

export function setCompleteStatus(key: string): string {
  const value: string | undefined = STATUS.find(
    (status: State) => status.key === key
  )?.value;
  if (!value) return '';
  return value;
}
