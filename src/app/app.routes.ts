import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home-page/home.component';
import { ClientConfigComponent } from './pages/invoice-config/client-config-page/client-config.component';
import { InvoiceConfigurationComponent } from './pages/invoice-config/invoice-configuration-view/invoice-configuration.component';
import { LoginComponent } from './pages/login-page/login.component';
import { ReportComponent } from './pages/report-page/report.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'app', component: AppComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'report', component: ReportComponent },
      {path: 'invoice-configuration', component: InvoiceConfigurationComponent,
        children: [
          { path: 'client-config', component: ClientConfigComponent }
        ]
      }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
