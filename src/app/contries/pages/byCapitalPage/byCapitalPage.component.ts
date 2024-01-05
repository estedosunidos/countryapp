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
  public isLoading:boolean = false;
  public contries: Country[]=[]
  public initialValue:string = '';
  ngOnInit() {
    this.contries=this.Country.chacstore.byCapital.Country
    this.initialValue=this.Country.chacstore.byCapital.term
  }
  serachbycapital(value:string){
    this.isLoading = true;
    this.Country.serachbycapital(value).subscribe(data=>{
      this.contries=data;
      console.log(data);
      this.isLoading = false;
    })
  }
}
