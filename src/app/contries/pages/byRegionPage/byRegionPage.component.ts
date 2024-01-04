import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { Country } from '../../interface/country';

@Component({
  selector: 'app-byRegionPage',
  templateUrl: './byRegionPage.component.html',
  styleUrls: ['./byRegionPage.component.css']
})
export class ByRegionPageComponent implements OnInit {

  constructor(private Country:CountriesService) { }
  public contries: Country[]=[]
  ngOnInit() {
  }
  serachbyregion(value:string){
    this.Country.serachbyregion(value).subscribe(data=>{
      this.contries=data;
      console.log(data);
    })

}
}
