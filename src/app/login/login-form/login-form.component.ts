import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../common/services/auth/auth.service";
import {Router} from "@angular/router";
import {REQUIRED_MSG} from "../../../conf/msgs";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output()
  private showSignup: EventEmitter<boolean> = new EventEmitter();

  public requiredMsg: string = REQUIRED_MSG;

  public loginForm: FormGroup;

  public constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) { }

  public ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  public defineLabelState(event: any): void {
    if(event.target.value) {
      event.target.labels[0].style.display = 'none';
    } else {
      event.target.labels[0].style.display = 'block';
    }
  }

  public onFormSubmit(value: any) {
    const userToCreate: User = this.convertToUser(value);
    this._authService.login(userToCreate.email, userToCreate.password).subscribe((result: boolean) => {
      if(result) {
        this._router.navigate(['/secretPage']);
      } else {
        this.showSignup.emit(true);
      }
    });
  }

  private convertToUser(value: any): any {
    return {
      email: value.email,
      password: value.password
    };
  }

}
