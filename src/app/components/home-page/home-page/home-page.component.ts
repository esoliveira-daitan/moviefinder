import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public searchBarPlaceholder = 'Search...';
  public title = 'MovieFinder';
  public about = 'A place to search all movies around the wolrd! Type your search below.';

  constructor(private router: Router) { }

  public catchSearchString(searchStr: string[]) {
    const queryParams = {
      words: JSON.stringify(searchStr)
    };
    const navigationExtras: NavigationExtras = {
      queryParams
    };
    this.router.navigate(['/search'], navigationExtras);
  }
}
