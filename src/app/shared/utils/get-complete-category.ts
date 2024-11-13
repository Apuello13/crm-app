import { State } from '../../core/models/state';
import { CATEGORIES } from '../../utils/categories';

export function getCompleteCategory(key: string): string {
  const value: string | undefined = CATEGORIES.find(
    (category: State) => category.key === key
  )?.value;
  if (!value) return '';
  return value;
}
