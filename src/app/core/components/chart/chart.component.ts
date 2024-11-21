import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';
import { TypeChart } from '../../models/type-chart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
})
export class ChartComponent implements OnChanges {
  @Input() type: TypeChart = 'doughnut';
  @Input() data: any = {};

  chart!: any;

  ngOnChanges(changes: SimpleChanges): void {
    this.createChart();
  }

  createChart(): void {
    const idChart: string =
      this.type === 'doughnut' ? 'pie-chart' : 'bar-chart';
    this.chart = new Chart(idChart, {
      type: this.type,
      data: this.data,
    });
  }
}
