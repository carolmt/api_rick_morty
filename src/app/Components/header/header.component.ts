import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PersonajesComponent } from '../personajes/personajes.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, CommonModule, RouterOutlet, PersonajesComponent],
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
}
