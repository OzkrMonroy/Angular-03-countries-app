import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent{
  error: boolean = false;
  searchWord: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search(searchWord: string) {
    this.searchWord = searchWord;
    this.countryService.getCountries(searchWord, 'capital').subscribe({
      next: (countries) => {
        this.error = false;
        this.countries = countries;
      },
      error: (err) => {
        this.error = true;
        this.countries = [];
      }
    });
  }

  displaySuggestions(event: string) {}

}
