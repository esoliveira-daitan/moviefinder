import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsPageComponent } from './results-page/results-page.component';
import { TableModule } from '../shared/table/table.module';
import { NoResultsComponent } from './no-results/no-results.component';
import { ButtonsModule } from '../shared/buttons/buttons.module';
import { TitleModule } from '../shared/title/title.module';

@NgModule({
  declarations: [
    ResultsPageComponent,
    NoResultsComponent
  ],
  imports: [
    ButtonsModule,
    CommonModule,
    TableModule,
    TitleModule,
  ]
})
export class ResultsPageModule { }
