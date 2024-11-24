import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/pages/main/app.component';
import { appConfig } from './app/pages/main/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));