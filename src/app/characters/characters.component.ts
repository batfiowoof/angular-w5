import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent implements OnInit {
  anime: any;

  ngOnInit(): void {
    this.logCharacters(20);
  }

  constructor(private animeService: AnimeService) {}

  fetchCharacters(id: number): void {
    this.animeService.getCharacters(id).subscribe(
      (data: any) => (this.anime = data.data),
      (error) => console.error('Error fetching characters', error)
    );
  }

  logCharacters(id: number): void {
    this.animeService
      .getCharacters(id)
      .subscribe((data: any) => (this.anime = data.data));
  }
}
