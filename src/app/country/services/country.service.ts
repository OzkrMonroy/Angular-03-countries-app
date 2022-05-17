import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private baseUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) { }

  getCountries(name: string, option: string = 'name'): Observable<Country[]> {
    const url: string = `${this.baseUrl}/${option}/${name}`;
    return this.http.get<Country[]>(url);
  }
  // getCountriesByRegion(region: string): Observable<any> {
  //   const url: string = `${this.baseUrl}/region/${region}`;
  //   return this.http.get(url);
  // }
  // getCountriesByCapital(capital: string): Observable<any> {
  //   const url: string = `${this.baseUrl}/capital/${capital}`;
  //   return this.http.get(url);
  // }
}
