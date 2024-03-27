import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, Observable, of, throwError} from 'rxjs';

export interface User {
  email: string;
  password: string;
  fio: string;
}

export interface Token {
  token: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = `https://api.fit-meetups.ru`;
  isLoggedIn: boolean = false;
  userName:string = "";
  message: string = "";

  public logout () {
    this.isLoggedIn = false;
    this.userName = "";
    localStorage.removeItem("token");
  }
  public register(user: User):void {
    console.log('register func', user)
    this.httpClient
      .post<Token>(`${this.baseUrl}/auth/registration`, user)
      .subscribe({
        next: value => {
          localStorage.setItem("token", value.token);
          this.isLoggedIn = true;
          this.userName = user.fio;
        },
        error: err => {
          console.error(err);
          this.message = "Something went wrong. Please try again"
        },
        complete: () => console.log('Complete and unsubscribe')
      });
  }

  public login(user: User):void {
    console.log('login func', user)
    this.httpClient
      .post<Token>(`${this.baseUrl}/auth/login`, user)
      .subscribe({
        next: value => {
          localStorage.setItem("token", value.token);
          this.isLoggedIn = true;
          this.userName = user.fio;
        },
        error: err => {
          console.error(err);
          this.message = "Something went wrong. Please try again"
        },
        complete: () => console.log('Complete and unsubscribe')
      });
  }

}
