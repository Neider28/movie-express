import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { CategoryListsComponent } from './components/category-lists/category-lists.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryComponent } from './pages/category/category.component';
import { MovieCategoryItemComponent } from './components/movie-category-item/movie-category-item.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDetailComponent,
    CategoryListsComponent,
    CategoryItemComponent,
    CategoryComponent,
    MovieCategoryItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
