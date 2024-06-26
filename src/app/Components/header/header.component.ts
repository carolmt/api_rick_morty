import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { PersonajesComponent } from '../personajes/personajes.component';
import { LocationComponent } from '../location/location.component';
import { EpisodeComponent } from '../episode/episode.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, CommonModule, RouterOutlet, PersonajesComponent, LocationComponent, EpisodeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showFiller = false;
  isMenuOpen = false;

  constructor(private router: Router) {}

  navigateToPersonajes(): void {
    this.router.navigate(['/personajes']);
  }

  navigateToLocations(): void {
    this.router.navigate(['/locations']);
  }

  navigateToEpisodes(): void {
    this.router.navigate(['/episodes']);
  }
}
