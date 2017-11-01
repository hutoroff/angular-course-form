import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import 'rxjs/add/operator/map';
import {UserService} from "../../common/services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  @Output()
  public signupSuccess: EventEmitter<boolean> = new EventEmitter();

  public signupForm: FormGroup;

  private _minPassLength: number = 8;

  public requiredMsg: string = 'Value required';
  public formatMsg: string = 'Wrong format';
  public minLengthMsg: string = 'Minimum value length: ';
  public registeredMsg: string = 'Already registered';

  public constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _router: Router
  ) { }

  public ngOnInit(): void {
    this.signupForm = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яёА-ЯЁ \-]+$/)]],
      secondName: ['', [Validators.required, Validators.pattern(/^[a-zA-Zа-яёА-ЯЁ \-]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this._minPassLength)]]
    });
  }

  public onFormSubmit(value: any) {
    const userToCreate: User = this.convertToUser(value);
    this._userService.saveUser(userToCreate);
    this.signupSuccess.emit(true);
  }

  public defineLabelState(event: any): void {
    if(event.target.value) {
      event.target.labels[0].style.display = 'none';
    } else {
      event.target.labels[0].style.display = 'block';
    }
  }

  private convertToUser(value: any): User {
    return {
      firstName: value.firstName,
      secondName: value.secondName,
      email: value.email,
      password: value.password
    };
  }

}
