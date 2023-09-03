import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchInput = new FormControl();
  searchResults: any[] = [];

  constructor(
    private readonly movieService: MovieService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(query => this.movieService.getMoviesBySearch(query))
      )
      .subscribe((data: any) => {
        this.searchResults = data.results;
      });
  }

  getMovieDetail(id: string) {
    this.router.navigate(['/movie', id]);
  }
}
