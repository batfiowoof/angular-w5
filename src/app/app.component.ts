import { Component, OnInit } from '@angular/core';
import { AnimeService } from './anime.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet],
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {}
