import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter} from "@angular/router";
import {provideHttpClient} from "@angular/common/http";
import {AppRoutes} from "./app/app.routes";


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(AppRoutes),
    provideHttpClient()
  ],
}).catch(err => console.error(err));
