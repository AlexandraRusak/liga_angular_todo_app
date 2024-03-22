import { Injectable } from '@angular/core';


export class TodoEntry {
  _status: "regular" | "important" | "done" = "regular";
  header: string
  body: string
  id:number

  constructor(
    id: number,
    header: string,
    body: string,
    important: boolean = false)
  {
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
    if (this.status !== "done") {
      this.status = "done"
    } else {this.status = "regular"}
  }

}

export interface Entry {
  header: string;
  body: string;
  important: boolean;
}

export interface SearchRequest {
  search: string;
  searchStatus: string;
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
    this.add({header: "heading 0", body: "body 0", important: true})
    this.add({header: "heading 1", body: "body 1", important: false})
    this.add({header: "heading 2", body: "body 2", important: false})

  }


  public delete(id: string): void {
    const entryId = Number(id)
    this.todoList = this.todoList.filter(todo => todo.id !== entryId);
  }

  public add(obj: Entry): void{
    const newTodoEntry = new TodoEntry(
        this._lastId++,
        obj.header,
        obj.body,
        obj.important);
    this.todoList.push(newTodoEntry)
  }

  public changeImportant(id: string): void{
    const entryId: number = Number(id)
    this.todoList.findIndex(todo => {
      if (todo.id=== entryId){
        todo.switchImportant()
      }
    })
  }

  public changeDone(id: string): void{
    const entryId = Number(id)
    this.todoList.findIndex(todo => {
      if (todo.id===entryId){
        todo.makeDone()
      }
    })
  }

  public searchEntries (obj: SearchRequest)  {
    console.log(obj.search)
    this.todoList = this.todoList.filter(todo => {
      if (obj.searchStatus) {
        return todo.header == obj.search || todo.body == obj.search && todo.status == obj.searchStatus
      } else if (!obj.searchStatus){
        return todo.header == obj.search || todo.body == obj.search
      } else if (!obj.search) {
        return todo.status === obj.searchStatus
      } else {
        return null
      }
    })
  }

}
