import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {TodoEntryComponent} from "../todo-entry/todo-entry.component";
import {Entry, TodoEntry, TodoListService} from "../services/todo-list.service";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {EntryFormComponent} from "../entry-form/entry-form.component";
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoEntryComponent, NgForOf, FormsModule, EntryFormComponent, SearchBarComponent, NavbarComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {

 constructor(
   public todoListService: TodoListService,
   private cdr: ChangeDetectorRef
 ) {
 }

  ngOnInit(){
    this.todoListService.initDataFromJson().subscribe(
      value => {(<Array<Entry>>value)
        .forEach(entry =>{
          console.log(entry.header)
          this.todoListService.add(entry)})
        this.cdr.detectChanges()
      });
  }


}
