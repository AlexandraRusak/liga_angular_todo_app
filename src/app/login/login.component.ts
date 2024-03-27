import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";
import {NavbarComponent} from "../navbar/navbar.component";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  // providers: [LoginLogoutService]
})
export class LoginComponent {

  constructor(public loginService: LoginService ) {
  }

  email: string = ""
  password: string = ""
  fio: string = ""

  // @Output() newEntryEvent = new EventEmitter<any>();

  submit(form: NgForm){
    const entry = {...form.value}
    this.loginService.login(entry);
  }

}
