import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Device } from '../model/device';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = 'http://localhost/phone_server/';
@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  private option: HttpHeaders = new HttpHeaders().set('Content-type', 'application/json');

  devices: Device[];

  constructor(private http: HttpClient) { }

  /*METODO LETTURA LISTA DATI*/
  getAll(): Observable<Device[]> {
    return this.http.get<Device[]>(url)
      .pipe(
        catchError(this.errorhandler)
      );
  }
  /*METODO AGGIUNTA DATI*/
  postDevice(device: Device): Observable<any> {
    return this.http.post(url, device, { headers: this.option })
    .pipe(
      catchError(this.errorhandler)
    );
  }

  /*METODO MODIFICA DATI*/
  putDevice(device: Device): Observable<any> {
    return this.http.put(url + '?id=' + device.id, device, { headers: this.option })
    .pipe(
      catchError(this.errorhandler)
    );
  }
  /*METODO CANCELLA DATI*/
  deleteDevice(device: Device): Observable<any> {
    return this.http.delete(url + '?id=' + device.id)
    .pipe(
      catchError(this.errorhandler)
    );
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
