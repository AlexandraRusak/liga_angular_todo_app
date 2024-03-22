import {Component, Output, EventEmitter} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";


@Component({
  selector: 'app-entry-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './entry-form.component.html',
  styleUrl: './entry-form.component.scss'
})
export class EntryFormComponent {

  header: string = ""
  body: string = ""
  important: boolean = false

  @Output() newEntryEvent = new EventEmitter<any>();

  submit(form: NgForm){
    const entry = {...form.value}
    entry.important = entry.important === "true";
    this.newEntryEvent.emit(entry);
  }
}
