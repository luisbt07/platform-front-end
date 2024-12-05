import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-page/home.component';
import { InvoiceConfigurationComponent } from './pages/invoice-configuration-view/invoice-configuration.component';
import { LoginComponent } from './pages/login-page/login.component';
import { ReportComponent } from './pages/report-page/report.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path : 'login', component : LoginComponent },
  {
    path: 'app', component: AppComponent,
    children: [
      { path : 'home', component : HomeComponent},
      { path : 'report', component : ReportComponent},
      { path : 'invoice-configuration', component : InvoiceConfigurationComponent},
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', redirectTo: 'login' },
];
