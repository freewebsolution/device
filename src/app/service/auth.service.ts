import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
const url = 'http://localhost/phone_server/auth/';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private option: HttpHeaders = new HttpHeaders().set('Content-type', 'x-www-form-urlencoded');

  constructor(private http: HttpClient) { }

   login(datiform) {
     const body = this.body(datiform);
     return this.http.post(url, body, { headers: this.option })
     .pipe(
       map(res => {
         if (res['token']) {
           this.setSession(res['token']);
         }
         return res['token'];
       }),
       catchError(this.errorhandler)
     );

  }
  private setSession (jwt: string) {
    let expire: number = new Date().getTime() + 10000;
    localStorage.setItem('token', jwt);
    localStorage.setItem('expire', expire.toString());
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expire');
  }


  private body(df: NgForm) {
   let param = new HttpParams()
    .set('username', df.value.username)
    .set('username', df.value.username);
    return param;
  }

  notExpired(): boolean {
    if (localStorage.getItem('scadenza')) {
      let expire: number = parseInt(localStorage.getItem('scadenza'));
      return new Date().getTime() < expire;
    }
  }


  /*GESTIONE ERRORI*/
  errorhandler(error: any) {
    console.log(error);
    let msg: string;
    if (error instanceof HttpErrorResponse) {
      if (error.status === 0) {
        msg = 'Applicazione offline';
      } else {
        msg = `Si è verificato un errore: ${error.error.msg} (server status code ${error.status})`;
      }
      return throwError(msg);
    }
    return throwError(`Si è verificato un errore di tipo: ${error.message}`);
  }
}
