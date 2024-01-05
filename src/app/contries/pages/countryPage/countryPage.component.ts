import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Route, Router } from '@angular/router';
import { CountriesService } from '../../service/countries.service';
import { Country } from '../../interface/country';
import { switchMap, tap } from 'rxjs';


@Component({
  selector: 'app-countryPage',
  templateUrl: './countryPage.component.html',
  styleUrls: ['./countryPage.component.css']
})
export class CountryPageComponent implements OnInit {
  public countries?: Country
  constructor(private ActivatedRoute:ActivatedRoute,private country:CountriesService,private route:Router) { }

  ngOnInit() {
    this.ActivatedRoute.params.pipe(switchMap(({id})=>this.country.searcgcountry(id))).subscribe(country =>{
     if(!country){
      return this.route.navigateByUrl('')
     }
     return this.countries = country

    })
  }

}
