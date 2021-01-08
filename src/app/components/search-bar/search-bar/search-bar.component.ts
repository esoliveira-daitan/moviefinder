import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

const MAX_KEYWORD = 4;
@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
    @Input() placeholder = '';
    @Output() sendValue = new EventEmitter();
    public searchStr = '';
    public emptyInputWarning = 'Please, type anyhing to search.';
    public maxKeywordsWarning = 'You have reached the limit for keywords search.';
    public allSearchStr: string[] = [];
    public hideEmptyWarning = true;
    public hideMaxKeywordsWarning = true;

    public getInputValue(event: KeyboardEvent) {
        const key = event.code;
        if (key === 'Comma') {
            event.preventDefault();
        }
        if (key === 'Comma' || key === 'Enter' || key === 'NumpadEnter') {
            this.addKeyword(this.searchStr);
            this.searchStr = '';
        }
    }

    public removeKeyword = (value: string) => {
        this.allSearchStr = this.allSearchStr.filter(item => item !== value);
        if (this.allSearchStr.length < MAX_KEYWORD && this.hideMaxKeywordsWarning === false) {
            this.hideMaxKeywordsWarning = true;
        }
    }

    public sendSearchValue() {
        if (this.searchStr === '' && this.allSearchStr.length === 0) {
            this.hideEmptyWarning = false;
            return;
        } else {
            this.addKeyword(this.searchStr);
        }
        this.sendValue.emit(this.allSearchStr);
    }

    private addKeyword(value: string) {
        if (value === '' || this.allSearchStr.filter(item => item === value).length) {
            return;
        }
        if (this.allSearchStr.length === MAX_KEYWORD) {
            this.hideMaxKeywordsWarning = false;
            return;
        }
        this.allSearchStr.push(value);
    }
}
