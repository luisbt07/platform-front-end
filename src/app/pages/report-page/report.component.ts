import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  @Output() titleEvent = new EventEmitter<string>();
  constructor() {
    this.sendTitle()
  }
  sendTitle() {
    this.titleEvent.emit("Invoice Configuration Metrics")
  }
}
