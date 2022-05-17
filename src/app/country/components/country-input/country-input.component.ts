import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {

  @Input() placeholder = 'Search for a country';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debounced: Subject<string> = new Subject();
  
  searchWord: string = '';

  ngOnInit(): void {
    this.debounced.pipe(debounceTime(300)).subscribe({ next: (value) => this.onDebounce.emit(value) });
  }

  search() {
    this.onEnter.emit(this.searchWord);
  }

  keyPressed() {
    this.debounced.next(this.searchWord);
  }
}
