import { categories } from '../../users/utils/category';

export function getCompleteCategory(key: string): string {
  const value: string | undefined = categories.find(
    (category: any) => category.value === key
  )?.label;
  if (!value) return '';
  return value;
}
