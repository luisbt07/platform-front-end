import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SideBarMenuComponent } from "./side-bar-menu/side-bar-menu.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SideBarMenuComponent, RouterOutlet, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  title!: string;
  
  setPageTitle(title: string) {
    this.title = title;
  }
}
