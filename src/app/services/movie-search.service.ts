import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MovieService } from 'src/interfaces/services';
import { MovieAPIResponse } from 'src/interfaces/movie';
import { forkJoin, Observable } from 'rxjs';

const API = 'https://api.themoviedb.org/3/search/movie?&api_key=feb6f0eeaa0a72662967d77079850353&query=';

@Injectable({providedIn: 'root'})
export class MovieSearchService implements MovieService  {
    constructor(private http: HttpClient) {}

    public async search(query: string[]) {
        const observables: Observable<MovieAPIResponse>[] = [];
        query.map((item: string) => {
            observables.push(this.http.get<MovieAPIResponse>(API + encodeURIComponent(item)));
        });

        const movies: string[][] = [];
        forkJoin(observables).subscribe((responses: MovieAPIResponse[]) => {
            responses.map(response => {
                response.results.map(element => {
                    const movie: string[] = [];
                    movie.push(element.title);
                    movie.push(element.release_date);
                    movie.push(element.overview);
                    movies.push(movie);
                });
            });
        });
        return movies;
    }
}
