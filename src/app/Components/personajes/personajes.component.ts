import { Component, inject, LOCALE_ID, OnInit } from '@angular/core';
import { PersonajeServiceService } from '../../Services/personaje-service.service';
import { RouterOutlet } from '@angular/router';
import { Result, Location, Info, InfoClass } from '../../Interfaces/personaje.interface';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})

export class PersonajesComponent implements OnInit{

  URL_BASE = 'https://rickandmortyapi.com/api/character?page=';

  deshabilitado: boolean = true;
  personajeList: Result[] = [];
  localizacion: Location[] = [];
  page = 1;
  infoClass: InfoClass = { count: 826, pages: 42, next: this.URL_BASE+this.page, prev: null };
 

  constructor(private personajeService: PersonajeServiceService) {  }

  ngOnInit(): void {
    console.log('PersonajesComponent initialized');
    this.getAllPersonajes();
  }

  getAllPersonajes() {
    this.personajeService.getPersonajes().subscribe({
      next: (result) => {
        this.personajeList = result.results;
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }

  nextPageForMore() {
    this.page = this.page + 1;

    this.personajeService.nextPage(this.page).subscribe({
      next: (result) => {
        this.personajeList = result.results;
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }

  previousPageForLess() {
    this.page = this.page - 1;

    this.personajeService.previousPage(this.page).subscribe({
      next: (result) => {
        this.personajeList = result.results;
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }

  habilitarBoton() {
    this.deshabilitado = false;
  }

  deshabilitarBoton() {
    this.deshabilitado = true;
  }
}
