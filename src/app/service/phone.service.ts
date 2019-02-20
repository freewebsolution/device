import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Device } from '../model/device';
import { Observable } from 'rxjs';

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
    return this.http.get<Device[]>(url);
  }
  /*METODO AGGIUNTA DATI*/
  postDevice(device: Device): Observable<any> {
    return this.http.post(url, device, { headers: this.option });
  }

  /*METODO MODIFICA DATI*/
  putDevice(device: Device): Observable<any> {
    return this.http.put(url + '?id=' + device.id, device, { headers: this.option });
  }
    /*METODO CANCELLA DATI*/
    deleteDevice(device: Device): Observable<any> {
      return this.http.delete(url + '?id=' + device.id);
    }

}
