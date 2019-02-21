import { Component, OnInit } from '@angular/core';
import { Device } from '../model/device';
import { PhoneService } from '../service/phone.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  devices: Device[];
  active: Device;
  showloader: boolean;
  showerrmsg: string;

  constructor(private deviceservice: PhoneService) { }

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

}
