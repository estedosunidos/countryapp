import { Component, OnInit } from '@angular/core';
import { Country } from '../../interface/country';
import { CountriesService } from '../../service/countries.service';

@Component({
  selector: 'app-byCountryPage',
  templateUrl: './byCountryPage.component.html',
  styleUrls: ['./byCountryPage.component.css']
})
export class ByCountryPageComponent implements OnInit {

  constructor(private Country:CountriesService) { }
  public contries: Country[]=[]
  ngOnInit() {
  }
  serachbycountry(value:string){
    this.Country.searchbycountry(value).subscribe(data=>{
      this.contries=data;
      console.log(data);
    })
  }
}
