import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-lists',
  templateUrl: './category-lists.component.html',
  styleUrls: ['./category-lists.component.css']
})
export class CategoryListsComponent {
  @Input() categoryLists = [];
}
