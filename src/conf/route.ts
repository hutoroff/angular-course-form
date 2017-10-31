import {Routes} from "@angular/router";
import {SecretPageComponent} from "../app/secret-page/secret-page.component";
import {AuthGuard} from "../app/common/guards/auth/auth.guard";
import {LoginComponent} from "../app/login/login.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'secretPage',
    pathMatch: 'full'
  },
  {
    path: 'secretPage',
    component: SecretPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
