import { Routes } from '@angular/router';
import { ClientViewComponent } from '../client-list-page/client-view/client-view.component';
import { HomeComponent } from '../home-page/home.component';
import { LoginComponent } from '../login-page/login.component';
import { ReportComponent } from '../report-page/report.component';

export const routes: Routes = [
  { path : 'login', component : LoginComponent },
  { path : 'home', component : HomeComponent},
  { path : 'report', component : ReportComponent},
  { path : 'view', component : ClientViewComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
