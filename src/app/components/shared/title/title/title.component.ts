import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  public title = 'MovieFinder';

  constructor(private router: Router) { }

  public goToHomePage() {
    this.router.navigate(['']);
  }
}
