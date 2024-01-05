import { Component, OnInit } from '@angular/core';
import { Country } from '../../interface/country';
import { CountriesService } from '../../service/countries.service';

@Component({
  selector: 'app-byCountryPage',
  templateUrl: './byCountryPage.component.html',
  styleUrls: ['./byCountryPage.component.css']
})
export class ByCountryPageComponent implements OnInit {

  constructor(private Country: CountriesService) { }
  public contries: Country[] = []
  public isLoading: boolean = false;
  public initialValue:string = '';
  ngOnInit() {
    this.contries=this.Country.chacstore.byCountrie.Country
    this.initialValue=this.Country.chacstore.byCountrie.term
  }
  serachbycountry(value: string) {
    this.isLoading = true;
    this.Country.searchbycountry(value).subscribe(data => {
      this.contries = data;
      console.log(data);
      this.isLoading = false;
    })
  }
}
