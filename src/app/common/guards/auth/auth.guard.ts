import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "../../services/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  public constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if(this._authService.isLoggedIn()) {
      return true;
    }
    this._router.navigate(['/login']);
    return false;
  }
}
