import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/byCapitalPage/byCapitalPage.component';
import { ByCountryPageComponent } from './pages/byCountryPage/byCountryPage.component';
import { ByRegionPageComponent } from './pages/byRegionPage/byRegionPage.component';
import { CountryPageComponent } from './pages/countryPage/countryPage.component';
import { ContryRoutingModule } from './country-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountrytableComponent } from './components/countrytable/countrytable.component';

@NgModule({
  imports: [
    CommonModule,
    ContryRoutingModule,
    SharedModule
  ],
  declarations: [ByCapitalPageComponent,ByCountryPageComponent,ByRegionPageComponent,CountryPageComponent,CountrytableComponent],
  exports: [CountrytableComponent]
})
export class ContriesModule { }
