import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, Observable, of, throwError} from 'rxjs';
import {Router} from "@angular/router";

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

  constructor(private httpClient: HttpClient,
              private router: Router) { }

  // to do: добавить метод проверки, есть ли токен в локал сторадже и загрузки профиля юзера

  baseUrl: string = `https://api.fit-meetups.ru`;
  isLoggedIn: boolean = false;
  userName:string = "";
  message: string = "";

  public logout () {
    this.isLoggedIn = false;
    this.userName = "";
    localStorage.removeItem("token");
    this.router.navigate([""])
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
          this.router.navigate(["todo-list"])
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
          this.router.navigate(["todo-list"])
        },
        error: err => {
          console.error(err);
          this.message = "Something went wrong. Please try again"
        },
        complete: () => console.log('Complete and unsubscribe')
      });
  }

}
