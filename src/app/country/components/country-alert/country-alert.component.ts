import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-alert',
  templateUrl: './country-alert.component.html',
  styles: [
  ]
})
export class CountryAlertComponent{

  @Input() error: boolean = false;
  @Input() searchWord: string = '';
  
  constructor() { }

}
