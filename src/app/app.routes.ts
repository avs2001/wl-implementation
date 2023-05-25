import {Routes} from "@angular/router";

export const AppRoutes: Routes = [
  {path: 'user', loadChildren: () => import('./screens/user/user.routes').then(r => r.UserRoutes)},
];
