import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie: any;

  constructor(private readonly router: Router) {}

  movieDetail(id: string) {
    this.router.navigate(['/movie', id]);
  }
}
