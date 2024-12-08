import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';
import { SideBarMenuComponent } from '../../layout/side-bar-menu/side-bar-menu.component';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [SideBarMenuComponent],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})

export class ReportComponent implements OnInit {
  @Output() titleEvent = new EventEmitter<string>();
  chart: any;

  constructor(private http: HttpClient) {
    this.sendTitle();
  }

  ngOnInit(): void {
    this.fetchDataAndGenerateChart();
  }

  sendTitle() {
    this.titleEvent.emit('Invoice Configuration Metrics');
  }

  fetchDataAndGenerateChart() {
    this.http.get<any[]>('http://localhost:3000/invoiceConfigurations').subscribe(data => {
      console.log('API Response:', data); // Verifique os dados recebidos
      const billingCycleCounts = data.reduce((acc: any, config: any) => {
        acc[config.billingCycle] = (acc[config.billingCycle] || 0) + 1;
        return acc;
      }, {});

      this.generateChart(Object.keys(billingCycleCounts), Object.values(billingCycleCounts));
    });
  }

  generateChart(labels: string[], data: number[]) {
    const ctx = document.getElementById('billingCycleChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: ['#043873', '#4F9CF9', '#212529', '#FFFFFF', '#FF9800'],
            hoverBackgroundColor: ['#0461CB', '#9EC8FA', '#16191C', '#E0DBDB', '#FF9800']
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });
  }
}
