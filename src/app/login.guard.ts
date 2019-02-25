import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // alert(state.url);

    return this.checkLogin(state.url);
  }
  private checkLogin (url: string) {
    // chiamo il service e verifico se ci sono le condizioni per entrare
    // let loginOk = false;

    if (!this.auth.notExpired()) {
      this.router.navigate(['login'] , {queryParams: {p: url}});
      return false;
    }
    return true;
  }

}
