import { Component, OnInit } from '@angular/core';
import { Nav } from '../model/nav';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menu: Nav[];
  constructor(private auth: AuthService) {
    this.menu = [
      {label: 'phone', url: 'phone'},
      {label: 'dashboard', url: 'dashboard'}
    ];
  }

  ngOnInit() {
  }

}
