import { Region } from './../interface/region.type';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interface/country';
import { CachStore } from '../interface/cach-store.interface';


@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiurl:string='https://restcountries.com/v3.1'
  public chacstore:CachStore={
    byCapital:{term:"",Country:[]},
    byCountrie:{term:"",Country:[]},
    byRegion:{region:"",Country:[]}
  }
  constructor(private httpClient: HttpClient) {
    this.LoadFromTOlocalStorage()
   }
   private saveToLocalstorage(): void {
  localStorage.setItem('chachstore', JSON.stringify(this.chacstore))
   }
   private LoadFromTOlocalStorage(): void {
    if(!localStorage.getItem('chachstore')) return
      this.chacstore=JSON.parse(localStorage.getItem('chachstore')!)

   }
  private getCountryRequest(url:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(url).pipe(catchError(()=>of([])))
  }
  searcgcountry(code:string):Observable<Country | null>{
    return this.httpClient.get<Country[]>(`${this.apiurl}/alpha/${code}`).pipe(map(countries=>countries.length>0?countries[0]:null), catchError(()=>of(null)));
  }
  serachbycapital(query:string):Observable<Country[]>{
    const url = `${this.apiurl}/capital/${query}`;
    return this.getCountryRequest(url).pipe(
      tap(Countries=>this.chacstore.byCapital = {term:query, Country: Countries}),
      tap(()=>this.saveToLocalstorage())
    )
  }
  searchbycountry(query:string):Observable<Country[]>{
    const url = `${this.apiurl}/name/${query}`;
    return this.getCountryRequest(url).pipe(
      tap(Countries=>this.chacstore.byCountrie = {term:query, Country: Countries}),
      tap(()=>this.saveToLocalstorage())
    )
  }
  serachbyregion(query:Region):Observable<Country[]>{
    const url = `${this.apiurl}/region/${query}`;
    return this.getCountryRequest(url).pipe(
      tap(Countries=>this.chacstore.byRegion = {region:query, Country: Countries}),
      tap(()=>this.saveToLocalstorage())
    )
  }

  }




