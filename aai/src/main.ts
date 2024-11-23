import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/pages/main/app.config';
import { AppComponent } from './app/pages/main/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
