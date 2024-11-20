import { interestRates } from '../../users/utils/interest-rates';

export function getCompleteInterestRate(key: string): string {
  const value: string | undefined = interestRates.find(
    (item: any) => item.value === key
  )?.label;
  if (!value) return 'N/A';
  return value;
}
