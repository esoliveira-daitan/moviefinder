import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomePageComponent } from './components/home-page/home-page/home-page.component';
import { ResultsPageComponent } from './components/results-page/results-page/results-page.component';
import { NoResultsComponent } from './components/results-page/no-results/no-results.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'search', component: ResultsPageComponent},
  { path: 'no-results', component: NoResultsComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
