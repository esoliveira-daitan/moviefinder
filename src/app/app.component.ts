import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MovieFinder';
  columns = ['Title', 'Release Date', 'Overview'];
  data = [{
    title: 'Matrix',
    releaseDate: '1993-02-03',
    overview: 'hehe'
  },
  {
    title: 'Matrix',
    releaseDate: '1993-02-03',
    overview: 'hehe'
  }];
}
