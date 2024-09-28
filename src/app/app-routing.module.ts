import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { StandingsComponent } from './standings/standings.component';
import { FootballschoolComponent } from './footballschool/footballschool.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'',component:HomeComponent,
  },
  {
    path:'team', component:TeamComponent,
  },
  {
    path:'fixtures',component:FixturesComponent,
  },
  {
    path:'standing',component:StandingsComponent,
  },
  {
    path:'footballschool',component:FootballschoolComponent,
  },
  {
    path:'shop',component:ShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
