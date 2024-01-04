import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/byCapitalPage/byCapitalPage.component';
import { ByCountryPageComponent } from './pages/byCountryPage/byCountryPage.component';
import { ByRegionPageComponent } from './pages/byRegionPage/byRegionPage.component';
import { CountryPageComponent } from './pages/countryPage/countryPage.component';
const routes:Routes = [
  {
    path: 'by-capita',
    component: ByCapitalPageComponent
  },
  {
    path: 'by-country',
    component: ByCountryPageComponent
  },
  {
    path: 'by-region',
    component: ByRegionPageComponent
  },
  {
    path: 'country/:id',
    component: CountryPageComponent
  },{
    path: '**',
    redirectTo: 'by-capita'
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule],
  exports: [RouterModule],
})
export class ContryRoutingModule { }
