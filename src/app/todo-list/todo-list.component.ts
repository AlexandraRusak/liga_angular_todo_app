import { Component } from '@angular/core';
import {TodoEntryComponent} from "../todo-entry/todo-entry.component";
import {TodoListService} from "../services/todo-list.service";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoEntryComponent, NgForOf, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  public delId!: number

 constructor(
   public todoListService: TodoListService
 ) {
 }
}
