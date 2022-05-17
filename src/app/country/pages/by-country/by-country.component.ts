import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent{
  errorMessage: string = '';
  error: boolean = false;
  countries: Country[] = [];
  searchWord: string = '';

  constructor(private countryService: CountryService) { }

  search(searchWord: string) {
    this.searchWord = searchWord;
    this.countryService.getCountries(searchWord, 'name', ['name','flags','capital','population','cca2']).subscribe({
      next: (countries) => {
        this.error = false;
        this.countries = countries;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.error = true;
        this.countries = [];
      }
    });
  }

  displaySuggestions(event: string) {
    this.error = false;
    this.errorMessage = '';
  }

}
