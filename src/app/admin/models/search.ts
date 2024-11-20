export interface Search {
  userId: number;
  startDate?: number;
  endDate?: number;
  name?: string;
  phone?: string;
  program?: string;
  status?: string;
  categories?: string[];
}
