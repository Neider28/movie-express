import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent {
  @Input() category: any;

  constructor(private readonly router: Router) {}

  categoryDetail(id: string) {
    this.router.navigate(['/category', id]);
  }
}
