import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
  `,
  styles: ['h2, p { text-align: center; }']
})
export class NotFoundComponent {
  public title = 'This page is not avaliable';
  public message = 'The link you have acccessed may be broken or the page may have ben removed.';
}
