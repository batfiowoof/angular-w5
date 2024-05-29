import { Component, OnInit } from '@angular/core';
import { AnimeService } from './anime.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule],
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent implements OnInit {
  anime: any;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.fetchAnime(1); // Replace 1 with the desired anime ID
  }

  fetchAnime(id: number): void {
    this.animeService.getAnime(id).subscribe(
      (data: any) => (this.anime = data.data),
      (error) => console.error('Error fetching anime', error)
    );
  }
}
