import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {

  public constructor(private _userService: UserService) {}

  private _isLoggedIn: boolean;

  public login(email: string, password: string): Observable<boolean> {
    const login$: Observable<boolean> = this._userService.login(email, password);
    login$.subscribe((result: boolean) => {
      if(result) {
        this._isLoggedIn = true;
      }
    });
    return login$;
  }

  public logout(): boolean {
    this._isLoggedIn = false;
    return this._isLoggedIn;
  }

  public isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

}
