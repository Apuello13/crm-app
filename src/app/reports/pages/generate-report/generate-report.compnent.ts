import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { categories } from '../../../users/utils/category';
import { report } from '../../utils/reports';
import { User } from '../../../users/models/user';
import { ReportService } from '../../services/report.service';
import { Search } from '../../../admin/models/search';
import { SessionService } from '../../../core/services/session.service';
import { Global } from '../../../utils/values';
import { Excel } from '../../utils/excel';
import { CustomerExcel } from '../../models/customer-excel';
import convertCustomerExcel from '../../utils/convert-customer-excel';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.compnent.html',
})
export class GenerateReportComponent implements OnInit {
  filterForm!: FormGroup;

  formBuilder: FormBuilder = inject(FormBuilder);
  _report: ReportService = inject(ReportService);
  _session: SessionService = inject(SessionService);

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(new Date()),
    end: new FormControl<Date | null>(new Date()),
  });

  advisers: User[] = [];

  categories = categories;
  reports = report;

  ngOnInit(): void {
    this.initForm();
    this.getAdvisers();
  }

  initForm(): void {
    this.filterForm = this.formBuilder.group({
      report: ['', Validators.required],
      adviser: '',
      categories: '',
    });
  }

  getAdvisers(): void {
    this._report
      .getAdvisers()
      .subscribe({ next: (response) => (this.advisers = response) });
  }

  generateReport(): void {
    const { start, end } = this.range.value;
    const { report, adviser, categories } = this.filterForm.value;
    const ALL_STUDENT_REPORT = this.reports[Global.ZERO].value;
    const userSession = this._session.getUser();
    const userId: number =
      report === ALL_STUDENT_REPORT ? userSession?.id : adviser;
    const filters: Search = {
      userId,
      startDate: start?.getTime(),
      endDate: end?.getTime(),
    };
    this._report.generateReport(filters).subscribe({
      next: (response) => {
        const reportName: string = this.getReportName(report);
        const clients: CustomerExcel[] = convertCustomerExcel(response);
        Excel.convertArrayToFile(clients, reportName);
      },
    });
  }

  getReportName(reportValue: string): string {
    const name: string =
      this.reports.find((report) => report.value === reportValue)?.label ?? '';
    const WHITE_CHARACTER: string = ' ';
    const REPLACE_CHARACTER: string = '_';
    return name.replace(WHITE_CHARACTER, REPLACE_CHARACTER);
  }

  resetForm(): void {
    this.filterForm.reset();
    this.range.controls['start'].setValue(new Date());
    this.range.controls['end'].setValue(new Date());
  }
}
