import { ViewComponent } from './../client-list-page/view.component';
import { Routes } from '@angular/router';
import { LoginComponent } from '../login-page/login.component';
import { HomeComponent } from '../home-page/home.component';
import { ReportComponent } from '../report-page/report.component';

export const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'home', component : HomeComponent},
  { path : 'report', component : ReportComponent},
  { path : 'view', component : ViewComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
