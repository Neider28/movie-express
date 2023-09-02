import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListsComponent } from './category-lists.component';

describe('CategoryListsComponent', () => {
  let component: CategoryListsComponent;
  let fixture: ComponentFixture<CategoryListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryListsComponent]
    });
    fixture = TestBed.createComponent(CategoryListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
