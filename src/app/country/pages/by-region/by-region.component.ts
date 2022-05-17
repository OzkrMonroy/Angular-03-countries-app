import { CountryService } from '../../services/country.service';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent{
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  selectedRegion: string = '';
  countries: Country[] = []
  error: boolean = false;

  constructor(private countryService: CountryService) { }

  getCountries(region: string) {
    if(this.selectedRegion === region) return;
    
    this.selectedRegion = region;
    this.countries = [];
    this.countryService.getCountries(region, 'region').subscribe({
      next: (countries: Country[]) => {
        this.error = false;
        this.countries = countries;
      },
      error: (err) => {
        this.error = true;
        this.countries = [];
      },
    })
  }
  getClass(region: string):string {
    return this.selectedRegion === region ? 'btn btn-primary me-2' : 'btn btn-outline-primary me-2';
  }
}
