import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Output() titleEvent = new EventEmitter<string>();
  constructor() {
    this.sendTitle()
  }
  sendTitle() {
    this.titleEvent.emit("Bem Vindo à Plataforma")
  }
}
