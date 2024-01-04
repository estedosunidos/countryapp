import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { Country } from '../../interface/country';

@Component({
  selector: 'app-byCapitalPage',
  templateUrl: './byCapitalPage.component.html',
  styleUrls: ['./byCapitalPage.component.css']
})
export class ByCapitalPageComponent implements OnInit {

  constructor(private Country:CountriesService) { }
 public contries: Country[]=[]
  ngOnInit() {
  }
  serachbycapital(value:string){
    this.Country.serachbycapital(value).subscribe(data=>{
      this.contries=data;
      console.log(data);
    })
  }
}
