import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ReportsRoutingModule } from './reports-routing.module';

import { ReportService } from './services/report.service';

import { GenerateReportComponent } from './pages/generate-report/generate-report.compnent';

@NgModule({
  declarations: [GenerateReportComponent],
  imports: [SharedModule, ReportsRoutingModule],
  providers: [ReportService],
})
export class ReportsModule {}
