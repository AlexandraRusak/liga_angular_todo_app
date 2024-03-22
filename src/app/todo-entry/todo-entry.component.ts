import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoListService} from "../services/todo-list.service";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-todo-entry',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './todo-entry.component.html',
  styleUrl: './todo-entry.component.scss'
})
export class TodoEntryComponent {

  @Input()
  id!: number
  @Input()
  header!: string
  @Input()
  body!: string
  @Input()
  status!: "regular" | "important" | "done";
  @Input()
  show!: boolean;

  constructor( ) {   }

  @Output() newStatusEvent = new EventEmitter<any>();

  @Output() newDoneEvent = new EventEmitter<any>();

  @Output() newDeleteEvent = new EventEmitter<any>()

  toggleStatus (event: any) {
    this.newStatusEvent.emit(event.target.id)
  }

  markDone (event: any) {
    this.newDoneEvent.emit(event.target.id)
    // console.log(event.target)
  }

  delete (event: any) {
    this.newDeleteEvent.emit(event.target.id)
  }

}
