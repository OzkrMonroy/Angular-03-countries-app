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
  searchWord: string = '';
  errorMessage: string = '';
  error: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  onSearch() {
    console.log(this.searchWord);
    this.countryService.getCountryByName(this.searchWord).subscribe({
      next: (countries) => {
        this.error = false;
        console.log(countries);
        this.countries = countries;
      },
      error: (err) => {
        console.log(err);
        
        this.errorMessage = err.error.message;
        this.error = true;
        this.countries = [];
      }
    });
  }

}
