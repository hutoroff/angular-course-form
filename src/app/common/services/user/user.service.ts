import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class UserService {

  private _userStorage: User[] = [];

  public isUniqueEmail(email: string): Observable<boolean> {
    const user: User | undefined = this.getUserByEmail(email);
    return Observable.of(!user).delay(1000);
  }

  public saveUser(user: User): Observable<boolean> {
    if(this.isUniqueEmail(user.email)) {
      this._userStorage.push(user);
      return Observable.of(true).delay(200);
    }
    return Observable.of(false).delay(150);
  }

  public login(email: string, password: string): Observable<boolean> {
    const user: User | undefined = this.getUserByEmail(email);
    if(!user) {
      return Observable.of(false).delay(2000);
    }
    return Observable.of(user.password === password).delay(200);
  }

  private getUserByEmail(email: string): User | undefined {
    return this._userStorage.find((user: User) => user.email === email);
  }

}
