import { Component, EventEmitter, Output } from '@angular/core';
import { SideBarMenuComponent } from "../../layout/side-bar-menu/side-bar-menu.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [SideBarMenuComponent, RouterLink],
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
