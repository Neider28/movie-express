import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  similar = [];
  isLoading = true;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly titleService: Title,
    private readonly movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      window.scroll(0, 0);

      this.movieService.getMovieById(this.activatedRoute.snapshot.params['id']).subscribe(data => {
        this.movie = data;
        this.titleService.setTitle(`${this.movie.title}`);

        this.movieService.getSimilarMovies(this.activatedRoute.snapshot.params['id']).subscribe(data => {
          this.similar = data.results.filter((item: any) => {
            if(item.poster_path) {
              return item;
            }
          });

          this.isLoading = false;
        });
      });
    });
  }
}
