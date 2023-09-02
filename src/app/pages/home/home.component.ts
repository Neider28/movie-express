import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingMovies = [];
  nowPlayingMovies = [];
  topRatedMovies = [];
  upcomingMovies = [];
  categoryLists = [];

  constructor(
    private readonly movieService: MovieService,
    private readonly titleService: Title
    ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Movie Express');

    this.movieService.getTrendingMovies().subscribe(data => {
      this.trendingMovies = data.results;
    });

    this.movieService.getNowPlayingMovies().subscribe(data => {
      this.nowPlayingMovies = data.results;
    });

    this.movieService.getTopRatedMovies().subscribe(data => {
      this.topRatedMovies = data.results;
    });

    this.movieService.getUpcomingMovies().subscribe(data => {
      this.upcomingMovies = data.results;
    });

    this.movieService.getCategories().subscribe(data => {
      this.categoryLists = data.genres;
    });
  }
}
