import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public LOGIN_FORM_ID: string = 'login';
  public SIGNUP_FORM_ID: string = 'signup';

  public selectedTab: string;

  public showSignupForm(show: boolean): void {
    if(show) {
      this.selectedTab = this.SIGNUP_FORM_ID;
    }
  }
  public showLoginForm(signupSucces: boolean): void {
    if(signupSucces) {
      this.selectedTab = this.LOGIN_FORM_ID;
    }
  }

}
