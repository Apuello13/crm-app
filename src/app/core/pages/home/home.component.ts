import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  pieChartData: any;
  barChartData: any;

  ngOnInit(): void {
    this.setPieChartData();
    this.setRadarChartData();
  }

  setPieChartData(): void {
    this.pieChartData = {
      labels: ['No definidos', 'Interesados', 'Interesados en inscribirse'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['rgb(255, 99, 132)', '#0088FE', '#00C49F'],
          hoverOffset: 4,
        },
      ],
    };
  }

  setRadarChartData(): void {
    this.barChartData = {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
      datasets: [
        {
          label: 'No definidos',
          data: [200, 100, 400, 300, 150, 500],
          backgroundColor: ['rgb(255, 99, 132)'],
        },
        {
          label: 'Interesados',
          data: [200, 100, 400, 300, 150, 500],
          backgroundColor: ['#0088FE'],
        },
        {
          label: 'Interesados en inscribirse',
          data: [200, 200, 300, 100, 100, 600],
          backgroundColor: ['#00C49F'],
        },
      ],
    };
  }
}
