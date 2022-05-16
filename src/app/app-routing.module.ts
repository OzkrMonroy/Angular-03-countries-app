import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { SeeCountryDetailsComponent } from './country/pages/see-country-details/see-country-details.component';

const routes: Routes = [
  { path: '', component: ByCountryComponent, pathMatch: 'full'},
  { path: 'region', component: ByRegionComponent, pathMatch: 'full'},
  { path: 'capital', component: ByCapitalComponent, pathMatch: 'full'},
  { path: 'detail/:id', component: SeeCountryDetailsComponent, pathMatch: 'full'},
  { path: '**', redirectTo: ''},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }