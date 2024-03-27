import {Component} from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from "../navbar/navbar.component";
import {LoginService} from "../services/login.service";
// import {HttpClient, HttpHandler} from "@angular/common/http";
// import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  // providers: [BrowserModule, HttpClient]

})
export class RegisterComponent {
  constructor( public loginService: LoginService ) {
  }
  email: string = "";
  password: string = "";
  fio: string = "";

  submit(form: NgForm){
    const entry = {...form.value}
    this.loginService.register(entry);
  }

}
