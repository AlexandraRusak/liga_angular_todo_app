import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  standalone: true,
  imports: [],
  templateUrl: './todo-entry.component.html',
  styleUrl: './todo-entry.component.scss'
})
export class TodoEntryComponent {
  _status: "regular" | "important" | "done" = "regular";
  header: string
  body: string

  constructor(header: string, body: string, important: boolean = false) {
    this.header = header
    this.body = body
    if (important) {
      this.status="important"
    }
    else {
      this.status="regular"
    }
  }

  public set status(value: "regular" | "important" | "done") {
    this._status = value
  }

  public get status(): "regular" | "important" | "done" {
    return this._status
  }

  public switchImportant(): void {
    if (this.status==="regular") {
      this.status = "important"
    }
    else {
      this.status = "regular"
    }
  }

  public makeDone(): void {
    this.status = "done"
  }
}
