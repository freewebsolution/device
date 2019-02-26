import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http' ;
import {FormsModule} from '@angular/forms' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormDetailComponent } from './Admin/form-detail/form-detail.component';
import { PhoneComponent } from './Admin/phone/phone.component';
import { DashoboardComponent } from './Admin/dashoboard/dashoboard.component';
import { UserPhoneComponent } from './user-phone/user-phone.component';
@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    FormDetailComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    DashoboardComponent,
    UserPhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
