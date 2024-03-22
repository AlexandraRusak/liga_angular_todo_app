import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  search: string = "";
  searchStatus: string = "";

  @Output() newSearchEvent = new EventEmitter<any>();
  submit(form: NgForm){
    console.log(form.value)
    this.newSearchEvent.emit(form.value);
  }

  // protected readonly status = status;
}
