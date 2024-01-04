import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interface/country';


@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiurl:string='https://restcountries.com/v3.1'
  constructor(private httpClient: HttpClient) { }
  searcgcountry(code:string):Observable<Country | null>{
    return this.httpClient.get<Country[]>(`${this.apiurl}/alpha/${code}`).pipe(map(countries=>countries.length>0?countries[0]:null), catchError(()=>of(null)));
  }
  serachbycapital(query:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.apiurl}/capital/${query}`).pipe(
      catchError(()=>of([]))
    );
  }
  searchbycountry(query:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.apiurl}/name/${query}`).pipe(
      catchError(()=>of([]))
    );
  }
  serachbyregion(query:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.apiurl}/region/${query}`).pipe(
      catchError(()=>of([]))
    );
  }

  }




