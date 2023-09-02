import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-category-item',
  templateUrl: './movie-category-item.component.html',
  styleUrls: ['./movie-category-item.component.css']
})
export class MovieCategoryItemComponent {
  @Input() movie: any;

  constructor(private readonly router: Router) {}

  movieDetail(id: string) {
    this.router.navigate(['/movie', id]);
  }
}
