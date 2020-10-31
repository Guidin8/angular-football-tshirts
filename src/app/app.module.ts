import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FootballShirtsComponent } from './football-shirts/football-shirts.component';
import { FootballShirtsAboutComponent } from './football-shirts-about/football-shirts-about.component';
import { ShirtsListComponent } from './shirts-list/shirts-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent,
     HelloComponent,
     FootballShirtsComponent,
     FootballShirtsAboutComponent,
     ShirtsListComponent,
     ShoppingCartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
