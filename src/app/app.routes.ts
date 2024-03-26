import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // children: [
    //   {
    //     path: 'green',
    //     title: 'green',
    //     canActivate: [elevatorGuard],
    //     component: GreenRoomComponent,
  },
  {
    path: 'todo-list',
    title: 'todo-list',
    // canActivate: [elevatorGuard],
    component: TodoListComponent,
  },
  {
    path: 'login',
    // pathMatch: 'full',
    component: LoginComponent,
  }
];
