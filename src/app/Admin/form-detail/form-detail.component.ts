import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Device } from 'src/app/model/device';
import { PhoneService } from 'src/app/service/phone.service';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.scss']
})
export class FormDetailComponent implements OnInit {
  @Input() devices: Device[];
  @Input() active: Device;
  @Output() okForm = new EventEmitter<object>();
  showerrmsg: string;
  constructor(private deviceservice: PhoneService) { }

  save(form: NgForm) {
    if (this.active.id) {
      this.edit(form.value);
    } else {
      this.add(form.value);
    }
    form.reset();
  }

  add(device: Device) {
    this.deviceservice.postDevice(device)
      .subscribe(dati => {
        this.devices = dati;
        this.okForm.emit({'action' : 'add'});
      }, error => this.showerrmsg = error
       );
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
        this.okForm.emit({'action' : 'update'});
      }, error => this.showerrmsg = error
      );
  }
  reset() {
    this.active = new Device();
  }

  ngOnInit() {
  }

}
