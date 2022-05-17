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

  getCountries(name: string, option: string = 'name', fields?: string[]): Observable<Country[]> {
    const stringFields: string = fields ? fields.join(',') : '';

    const url: string = stringFields.trim().length > 0 ? `${this.baseUrl}/${option}/${name}?fields=${stringFields}` : `${this.baseUrl}/${option}/${name}`;
    return this.http.get<Country[]>(url);
  }
}
