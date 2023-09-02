import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCategoryItemComponent } from './movie-category-item.component';

describe('MovieCategoryItemComponent', () => {
  let component: MovieCategoryItemComponent;
  let fixture: ComponentFixture<MovieCategoryItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCategoryItemComponent]
    });
    fixture = TestBed.createComponent(MovieCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
