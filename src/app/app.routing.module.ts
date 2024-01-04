import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { AboutPageComponent } from './shared/pages/aboutPage/aboutPage.component';
import { ContacPageComponent } from './shared/pages/ContacPage/ContacPage.component';
const routes:Routes=[

  // {
  //   path:'',
  //   component:HomePageComponent
  // },
  {
    path:'about',
    component:AboutPageComponent
  },
  {
    path:'contact',
    component:ContacPageComponent
  },
  {
    path:'country',
    loadChildren:()=>import('./contries/contries.module').then(m=>m.ContriesModule)
  },
  {
    path:'**',
    redirectTo:'country'
  }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
  })
export class AppRoutingModule { }
