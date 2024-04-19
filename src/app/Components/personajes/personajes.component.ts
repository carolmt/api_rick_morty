import { Component, inject, OnInit } from '@angular/core';
import { PersonajeServiceService } from '../../Services/personaje-service.service';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent implements OnInit{

  URL_BASE = 'https://rickandmortyapi.com/api';
  private personajeService = inject(PersonajeServiceService);

  ngOnInit(): void {
    console.log('PersonajesComponent initialized');
  }

  getAllPersonajes() {
    this.personajeService.getPersonajes().subscribe({
      next: (response) => {
        console.log(response);
      }});
  }
}
