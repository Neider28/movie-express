import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private readonly http: HttpClient) { }

  getMovieById(id : string) {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=19ab9ff6748c8916dc40d578e2b88ea2`);
  }

  getSimilarMovies(id : string) {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=19ab9ff6748c8916dc40d578e2b88ea2`);
  }

  getTrendingMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/trending/movie/day?api_key=19ab9ff6748c8916dc40d578e2b88ea2');
  }

  getNowPlayingMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/now_playing?api_key=19ab9ff6748c8916dc40d578e2b88ea2');
  }

  getTopRatedMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/top_rated?api_key=19ab9ff6748c8916dc40d578e2b88ea2');
  }

  getUpcomingMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/upcoming?api_key=19ab9ff6748c8916dc40d578e2b88ea2');
  }

  getCategories() {
    return this.http.get<any>('https://api.themoviedb.org/3/genre/movie/list?api_key=19ab9ff6748c8916dc40d578e2b88ea2');
  }

  getMoviesByCategory(id: string) {
    return this.http.get<any>(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=19ab9ff6748c8916dc40d578e2b88ea2`);
  }

  getMoviesBySearch(query: string) {
    return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=19ab9ff6748c8916dc40d578e2b88ea2`);
  }
}
