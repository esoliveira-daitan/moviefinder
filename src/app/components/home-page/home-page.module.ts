import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { TableModule } from '../shared/table/table.module';
import { TitleModule } from '../shared/title/title.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SearchBarModule,
    TableModule,
    TitleModule
  ]
})
export class HomePageModule { }
