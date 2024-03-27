import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map, Observable} from "rxjs";

enum EntryStatus {
  regular = "regular",
  important = "important",
  done = "done"
}

export class TodoEntry {
  _status: EntryStatus = EntryStatus.regular;
  _beforeDoneStatus: EntryStatus = EntryStatus.regular;
  header: string
  body: string
  show: boolean = true
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
      this.status=EntryStatus.important
    }
    else {
      this.status=EntryStatus.regular
    }
  }

  public set status(value: EntryStatus) {
    this._status = value
  }

  public get status(): EntryStatus {
    return this._status
  }

  public switchImportant(): void {
    if (this.status===EntryStatus.regular) {
      this.status = EntryStatus.important
    }
    else {
      this.status = EntryStatus.regular
    }
  }

  public makeDone(): void {
    if (this.status !== EntryStatus.done) {
      this._beforeDoneStatus = this.status
      this.status = EntryStatus.done
    } else {this.status = this._beforeDoneStatus}
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


  public initDataFromJson():Observable<object> {
    return this.httpClient.get("assets/todo-list.json")
  }

  constructor(private httpClient: HttpClient
  ) {
    // for testing



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
    console.log(this.todoList)
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
    this.todoList.forEach(todo => {
      let isShown: boolean = true
      if (obj.search.length>0) {
        isShown = isShown && (todo.header == obj.search)
      }
      if (obj.searchStatus.length>0) {
        isShown = isShown && (obj.searchStatus==todo.status)
      }
      todo.show = isShown
    })

  }

}
