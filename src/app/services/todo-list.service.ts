import { Injectable } from '@angular/core';
import { TodoEntryComponent } from "../todo-entry/todo-entry.component";

export class TodoEntry {
  _status: "regular" | "important" | "done" = "regular";
  header: string
  body: string
  id:number

  constructor(
    id: number,
    header: string,
    body: string,
    important: boolean = false) {
    this.id = id
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


@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  _lastId = 0
  public todoList: Array<TodoEntry> = []

  constructor(
  ) {
    // for testing
    // this.add('header1','body1',false)
    // this.add('header2','body2',false)
    // this.add('header3','body3',false)
    // this.delete(1)
    // this.changeImportant(0)
    // this.changeDone(2)
  }


  public delete(id: number): void{
    this.todoList = this.todoList.filter(todoList => todoList.id !== id);
  }

  public add(header:string, body: string, important:boolean = false): void{
    const newTodoEntry = new TodoEntry(
        this._lastId++,
        header,
        body,
        important);
    this.todoList.push(newTodoEntry)
  }

  public changeImportant(id: number): void{
    this.todoList.forEach(todo => {
      if (todo.id===id){
        todo.switchImportant()
      }
    })
  }

  public changeDone(id: number): void{
    this.todoList.forEach(todo => {
      if (todo.id===id){
        todo.makeDone()
      }
    })
  }

}
