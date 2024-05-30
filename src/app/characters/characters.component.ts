import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent implements OnInit {
  anime: any;

  randomCharacterId = Math.floor(Math.random() * 100 + 1);

  ngOnInit(): void {
    this.fetchCharacters(this.randomCharacterId);
  }

  constructor(private animeService: AnimeService) {}

  fetchCharacters(id: number): void {
    this.animeService.getCharacters(id).subscribe(
      (data: any) => (this.anime = data.data),
      (error) =>
        alert('No character ID found, please try again.' + error.message)
    );
  }

  refresh(): void {
    window.location.reload();
  }
}
