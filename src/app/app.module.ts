import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './components/home-page/home-page.module';
import { ResultsPageModule } from './components/results-page/results-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ErrorsModule,
    HomePageModule,
    HttpClientModule,
    ResultsPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
