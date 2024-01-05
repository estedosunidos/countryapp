import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SideBarComponent } from './components/SideBar/SideBar.component';
import { RouterModule } from '@angular/router';
import { ContacPageComponent } from './pages/ContacPage/ContacPage.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HomePageComponent,AboutPageComponent,SideBarComponent,ContacPageComponent,SearchBoxComponent,LoaderComponent],
  exports:[HomePageComponent,AboutPageComponent,SideBarComponent,ContacPageComponent,SearchBoxComponent,LoaderComponent]
})
export class SharedModule { }
