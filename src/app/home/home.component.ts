import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  anime: any;

  randomAnimeId = Math.floor(Math.random() * 1000);

  ngOnInit(): void {
    this.fetchAnime(this.randomAnimeId);
  }

  constructor(private animeService: AnimeService) {}

  //fetch data for the given anime id
  fetchAnime(id: number): void {
    this.animeService.getAnime(id).subscribe(
      (data: any) => (this.anime = data.data),
      (error) => console.error('Error fetching anime', error)
    );
  }
}
