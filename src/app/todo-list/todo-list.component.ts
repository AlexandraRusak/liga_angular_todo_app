import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodoEntryComponent} from "../todo-entry/todo-entry.component";
import {TodoListService} from "../services/todo-list.service";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {EntryFormComponent} from "../entry-form/entry-form.component";
import {SearchBarComponent} from "../search-bar/search-bar.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoEntryComponent, NgForOf, FormsModule, EntryFormComponent, SearchBarComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {

 constructor(
   public todoListService: TodoListService
 ) {
 }


}
