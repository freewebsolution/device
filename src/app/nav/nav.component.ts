import { Component, OnInit } from '@angular/core';
import { Nav } from '../model/nav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menu: Nav[];
  constructor() {
    this.menu = [
      {label: 'phone', url: 'phone'},
      {label: 'login', url: 'login'},
      {label: 'dashboard', url: 'dashboard'}
    ];
  }

  ngOnInit() {
  }

}
