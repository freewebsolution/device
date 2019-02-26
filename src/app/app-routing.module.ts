import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PhoneComponent } from './Admin/phone/phone.component';
import { LoginGuard } from './login.guard';
import { DashoboardComponent } from './Admin/dashoboard/dashoboard.component';
import { UserPhoneComponent } from './user-phone/user-phone.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard/phone', component: PhoneComponent, canActivate: [LoginGuard]},
  {path: 'dashboard', component: DashoboardComponent, canActivate: [LoginGuard]},
  {path: 'phone', component: UserPhoneComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
