import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-see-country-details',
  templateUrl: './see-country-details.component.html',
  styles: [
  ]
})
export class SeeCountryDetailsComponent implements OnInit {
  country!: Country;
  loading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.countryService.getCountries(id, 'alpha')),
      tap(console.log)
    ).subscribe({
      next: (country) => {
        this.country = country[0];
        this.loading = false;
      }
    })

    // this.activatedRoute.params.subscribe({
    //   next: ({ id }) => {
    //     this.countryService.getCountries(id, 'alpha').subscribe({
    //       next: (country) => {
    //         console.log(country);

    //       }
    //     })
    //   }
    // })
  }

}
