import { Component, OnInit } from '@angular/core';
import { Device } from '../model/device';
import { PhoneService } from '../service/phone.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  private url: string;
  devices: Device[];
  active: Device;
  showerrmsg: string;

  constructor(private deviceservice: PhoneService) { }

  ngOnInit() {
    this.getAll();
  }
  save(form: NgForm) {
    if (this.active.id) {
      this.edit(form.value);
    } else {
      this.add(form.value);
    }
    form.reset();
  }

  getAll() {
    this.deviceservice.getAll()
      .subscribe(dati => {
        this.devices = dati;
      }, error => this.showerrmsg = error
      );
  }
  add(device: Device) {
    this.deviceservice.postDevice(device)
      .subscribe(dati => this.devices = dati);

  }

  edit(device: Device) {
    const newDevice = Object.assign(
      {},
      this.active,
      device
    );
    this.deviceservice.putDevice(newDevice)
      .subscribe(dati => {
        // tslint:disable-next-line:no-shadowed-variable
        const id = this.devices.findIndex(device => device.id === newDevice.id);
        this.devices[id] = newDevice;
      }
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
  setActive(device: Device) {
    this.active = device;
  }
  reset() {
    this.active = new Device();
  }


}
