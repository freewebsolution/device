import { Component, OnInit } from '@angular/core';
import { Device } from '../model/device';
import { PhoneService } from '../service/phone.service';


@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  private url: string;
  devices: Device[];
  active: Device;
  showloader: boolean;
  showerrmsg: string;

  constructor(private deviceservice: PhoneService) {
    this.showloader = true;
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.deviceservice.getAll()
      .subscribe(dati => {
        this.devices = dati;
        this.showloader = false;
      }, error => this.showerrmsg = error
      );
  }

  delete(event: MouseEvent, device: Device) {
    event.stopPropagation();
    this.deviceservice.deleteDevice(device)
      .subscribe(
        () => {
          const id = this.devices.indexOf(device);
          this.devices.splice(id, 1);
        }
      );
  }
  okFormPadre(obj: Object) {
    if (obj['action'] === 'add' || obj['action'] === 'update') {
      this.getAll();
    }
  }
  setActive(device: Device) {
    this.active = device;
  }


}
