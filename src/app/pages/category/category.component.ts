import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  movieListsByCategory = [];
  title: any;
  isLoading = true;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly titleService: Title,
    private readonly movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      window.scroll(0, 0);

      this.movieService.getCategories().subscribe(data => {
        this.title = data.genres.find((item: any) => item.id == this.activatedRoute.snapshot.params['id']).name;
        this.titleService.setTitle(`Category | ${this.title}`);
      });

      this.movieService.getMoviesByCategory(this.activatedRoute.snapshot.params['id']).subscribe(data => {
        this.movieListsByCategory =  data.results;
      })
    });
  }
}
