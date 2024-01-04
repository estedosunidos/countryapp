import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { CountriesService } from '../../service/countries.service';
import { Country } from '../../interface/country';


@Component({
  selector: 'app-countryPage',
  templateUrl: './countryPage.component.html',
  styleUrls: ['./countryPage.component.css']
})
export class CountryPageComponent implements OnInit {

  constructor(private ActivatedRoute:ActivatedRoute,private country:CountriesService) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe((params:any) =>{
      this.country.searcgcountry(params['id']).subscribe((data:Country[])=>{
        console.log(data);
      })
      console.log({params:params['id']});
    })
  }

}
