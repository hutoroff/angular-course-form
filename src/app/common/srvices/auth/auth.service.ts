import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private _isLoggedIn: boolean;

  public login(): boolean {
    this._isLoggedIn = true;
    return this._isLoggedIn;
  }

  public logout(): boolean {
    this._isLoggedIn = false;
    return this._isLoggedIn;
  }

  public isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

}
