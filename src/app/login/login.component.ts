import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showerrmsg: string;
  p: string;

  constructor(private authservice: AuthService, private router: Router, private route: ActivatedRoute) { }

  sendLogin(form: NgForm) {
    this.authservice.login(form)
      .subscribe(dati => {
        // alert('token passato ' + dati);
        this.router.navigate([this.p]);
      },
      error => this.showerrmsg = error
      );
  }
  ngOnInit() {
    this.authservice.logout();
    this.p = this.route.snapshot.queryParams['p'] || 'dashboard';
  }

}
