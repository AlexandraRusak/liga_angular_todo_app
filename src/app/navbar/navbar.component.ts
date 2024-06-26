import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {LoginService} from "../services/login.service";
import {NgIf} from "@angular/common";
import {User} from "../user.model";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public loginService: LoginService) {
  }

}
