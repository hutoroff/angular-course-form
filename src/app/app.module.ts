import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecretPageComponent } from './secret-page/secret-page.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from "./common/srvices/auth/auth.service";
import {AuthGuard} from "./common/guards/auth/auth.guard";
import {RouterModule} from "@angular/router";
import {routes} from "../conf/route";
import { SelectorComponent } from './login/selector/selector.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { SignupFormComponent } from './login/signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SecretPageComponent,
    LoginComponent,
    SelectorComponent,
    LoginFormComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
