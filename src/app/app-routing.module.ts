import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FootballShirtsAboutComponent } from './football-shirts-about/football-shirts-about.component';
import { FootballShirtsComponent } from './football-shirts/football-shirts.component';
import { ShirtsListComponent } from './shirts-list/shirts-list.component';


export const routes: Routes = [
  {
    path :'',
    component:ShirtsListComponent,
  },
  {
    path:'home',
    component:ShirtsListComponent,
  },
  {
   path :'shirts',
   component : ShirtsListComponent,
  },
  {
    path:'about',
    component : FootballShirtsAboutComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }