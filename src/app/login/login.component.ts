import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = ""
  password: string = ""
  fio: string = ""

  @Output() newEntryEvent = new EventEmitter<any>();

  submit(form: NgForm){
    const entry = {...form.value}
    this.newEntryEvent.emit(entry);
  }

}
