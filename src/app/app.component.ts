import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodoEntryComponent} from "./todo-entry/todo-entry.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'liga_angular_todo_app';
}
