import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [LoginComponent, RegisterComponent, NgIf],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginVisible: boolean = true;

  showLogin() {
    this.isLoginVisible = true;
  }

  showRegister() {
    this.isLoginVisible = false;
  }
}
