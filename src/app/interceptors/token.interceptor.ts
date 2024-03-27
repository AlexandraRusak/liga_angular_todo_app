import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {LoginService} from "../services/login.service";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (
  req, next): Observable<HttpEvent<any>> => {
  const loginService = inject(LoginService);
    const token: string | null = loginService.token;
  const isApiUrl = req.url.startsWith(loginService.baseUrl);
  if (token && isApiUrl) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }
  console.log(req)
  return next(req);
}

