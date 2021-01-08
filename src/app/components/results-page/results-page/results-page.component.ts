import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieSearchService } from 'src/app/services/movie-search.service';

const PARAM = 'words';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent implements OnInit {
  public columns = ['Title', 'Release Date', 'Overview'];
  public data: string[][] = [];

  constructor(private movieSearchService: MovieSearchService, private route: ActivatedRoute) { }

  public async ngOnInit() {
    const param: string[] = JSON.parse(this.route.snapshot.queryParamMap.get(PARAM));
    this.data = await this.movieSearchService.search(param);
  }
}
