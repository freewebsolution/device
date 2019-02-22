import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.checkLogin();
  }
  private checkLogin () {
    // chiamo il service e verifico se ci sono le condizioni per entrare
    let loginOk = false;

    if (!loginOk) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
