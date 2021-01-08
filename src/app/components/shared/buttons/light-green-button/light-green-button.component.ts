import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-light-green-button',
  templateUrl: './light-green-button.component.html',
  styleUrls: ['./light-green-button.component.scss']
})
export class LightGreenButtonComponent {
  @Input() text = '';
  @Input() click: () => void;

  public onButtonClick() {
    this.click();
  }
}
