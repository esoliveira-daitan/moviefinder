import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.scss']
})
export class KeywordComponent {
  @Input() label = '';
  @Input() removeKeyword: (label: string) => void;

  public delete = () => {
    this.removeKeyword(this.label);
  }
}
