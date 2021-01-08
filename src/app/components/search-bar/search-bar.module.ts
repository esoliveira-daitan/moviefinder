import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { KeywordComponent } from './keyword/keyword.component';

@NgModule({
    declarations: [
        SearchBarComponent,
        KeywordComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        SearchBarComponent
    ]
})
export class SearchBarModule { }
