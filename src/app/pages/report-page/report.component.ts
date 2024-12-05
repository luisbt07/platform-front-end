import { Component, EventEmitter, Output } from '@angular/core';
import { SideBarMenuComponent } from '../../layout/side-bar-menu/side-bar-menu.component';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [SideBarMenuComponent],
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
