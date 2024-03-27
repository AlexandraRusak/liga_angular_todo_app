import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {authGuard} from "./guards/auth.guard";
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'todo-list',
    title: 'todo-list',
    canActivate: [authGuard],
    component: TodoListComponent,
  },
  {
    path: 'login',
    // pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'register',
    // pathMatch: 'full',
    component: RegisterComponent,
  }
];
