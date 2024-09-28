import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { StandingsComponent } from './standings/standings.component';
import { FootballschoolComponent } from './footballschool/footballschool.component';
import { ShopComponent } from './shop/shop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { TeamSliderComponent } from './team-slider/team-slider.component';
//import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TeamComponent,
    FixturesComponent,
    StandingsComponent,
    FootballschoolComponent,
    ShopComponent,
    TableComponent,
    TeamSliderComponent,
    //DataTablesModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
