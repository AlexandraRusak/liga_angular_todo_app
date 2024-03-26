import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  email: string = ""
  password: string = ""
  fio: string = ""

  @Output() newEntryEvent = new EventEmitter<any>();

  submit(form: NgForm){
    const entry = {...form.value}
    this.newEntryEvent.emit(entry);
  }

}
