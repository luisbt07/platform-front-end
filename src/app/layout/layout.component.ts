import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarMenuComponent } from "../side-bar-menu/side-bar-menu.component";

@Component({
  selector: 'app-layout',
  imports: [SideBarMenuComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
