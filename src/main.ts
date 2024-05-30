import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { CharactersComponent } from './app/characters/characters.component';
import { HomeComponent } from './app/home/home.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'characters', component: CharactersComponent },
      { path: '**', redirectTo: '' },
    ]),
  ],
}).catch((err) => console.error(err));
