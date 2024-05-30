import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private baseUrl = 'https://api.jikan.moe/v4/anime';

  constructor(private http: HttpClient) {}

  getAnime(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}/full`);
  }

  getCharacters(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}/characters`);
  }
}
