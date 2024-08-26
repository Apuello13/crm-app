import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
  inject,
} from '@angular/core';

import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { Table } from '../../models/table';
import { Event } from '../../models/event';

import { customPaginator } from '../../utils/custom-paginator';
import { setCompleteStatus } from '../../utils/set-complete-status';
import { Actions } from '../../../utils/actions';

import { AlertService } from '../../../core/services/alert.service';
import { NavigationService } from '../../../core/services/navigation.service';
import { Global } from '../../../utils/values';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  providers: [{ provide: MatPaginatorIntl, useValue: customPaginator() }],
})
export class TableComponent implements OnChanges, AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input('columns') columns: Table[] = [];
  @Input('rows') rows: any[] = [];
  @Input('actions') actions: string[] = [];
  @Input('showSearch') showSearch: boolean = true;
  @Input('fileNameExcel') fileNameExcel: string = '';
  @Input('showExcelButton') showExcelButton: boolean = true;
  @Input('sendEvents') sendEvents: boolean = false;

  @Output('sendEvent') sendEvent: EventEmitter<Event> = new EventEmitter();

  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize: number = 5;
  dataSource = new MatTableDataSource<any>(this.rows);
  searchValue: string = '';

  _alert: AlertService = inject(AlertService);
  _navigation: NavigationService = inject(NavigationService);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rows']) this.updateDataTable();
  }

  updateDataTable(): void {
    this.dataSource.data = [...this.rows];
    this.paginateRows();
    if (this.table) this.table.renderRows();
    this.updatePaginator();
  }

  updatePaginator() {
    if (this.paginator) {
      this.paginator.length = this.rows.length;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getHeadersName(): string[] {
    return this.columns.map((column) => column.headerName);
  }

  paginateRows(): void {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      const endIndex = startIndex + this.paginator.pageSize;
      this.dataSource.data = this.rows.slice(startIndex, endIndex);
    }
  }

  isExistsAction(action: string): boolean {
    return !!this.actions.find((a) => a === action);
  }

  getFields(): string[] {
    return this.columns.map((column) => column.field);
  }

  getCompleteStatus(status: string): string {
    return setCompleteStatus(status);
  }

  confirmAction(rowId: number): void {
    this._alert.confirm().then((result) => {
      if (result.isConfirmed) {
        this.sendEvent.emit({ event: Actions.DELETE, rowId, row: null });
      }
    });
  }

  edit(row: any, key: string): void {
    const currentPath: string = this._navigation.getCurrentPath();
    if (this.sendEvents)
      this.sendEvent.emit({ event: Actions.EDIT, row, rowId: Global.ZERO });
    else this._navigation.goToWithQueryParams(`${currentPath}/form`, row[key]);
  }

  view(row: any): void {
    this.sendEvent.emit({ event: Actions.VIEW, row, rowId: Global.ZERO });
  }

  openModal(row: any): void {
    this.sendEvent.emit({ event: Actions.MODAL, row, rowId: Global.ZERO });
  }

  getObjectValue(element: any, field: string): string | number {
    const keys = field.split('.');
    const lengthKeys = keys.length;
    let currentValue: any = null;
    keys.map((key, index) => {
      if (index !== lengthKeys - 1) currentValue = element[key];
    });
    return currentValue[keys[lengthKeys - 1]];
  }
}
