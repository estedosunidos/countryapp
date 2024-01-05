import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { Country } from '../../interface/country';
import { Subscription } from 'rxjs';
import { Region } from '../../interface/region.type';

@Component({
  selector: 'app-byRegionPage',
  templateUrl: './byRegionPage.component.html',
  styleUrls: ['./byRegionPage.component.css']
})
export class ByRegionPageComponent implements OnInit {

  constructor(private Country:CountriesService) { }
  public contries: Country[]=[]
 public region:Region[] = ['Africa', 'Europe', 'Asia','Americas','Oceania']
 public selectedRegion?:Region

  ngOnInit() {
    this.contries=this.Country.chacstore.byRegion.Country
    this.selectedRegion=this.Country.chacstore.byRegion.region

  }
  serachbyregion(value:Region){
    this.selectedRegion=value
    this.Country.serachbyregion(value).subscribe(data=>{
      this.contries=data;
      console.log(data);
    })

}
}
