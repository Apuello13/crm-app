import { MatPaginatorIntl } from '@angular/material/paginator';

export function customPaginator(
  mainLabel: string = 'Elementos'
): MatPaginatorIntl {
  const GENERAL_LABEL = `${mainLabel} por paginas`;
  const customPaginatorIntl = new MatPaginatorIntl();
  customPaginatorIntl.itemsPerPageLabel = GENERAL_LABEL;
  return customPaginatorIntl;
}
