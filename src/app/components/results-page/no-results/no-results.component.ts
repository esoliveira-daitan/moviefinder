import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-results',
  templateUrl: './no-results.component.html',
  styleUrls: ['./no-results.component.scss']
})
export class NoResultsComponent {
  public message = 'No movies was found.';

  constructor(private router: Router) { }

  public goBack = () => {
    this.router.navigate(['']);
  }
}
