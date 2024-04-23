import { Component, inject, LOCALE_ID, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Result, Location, Info, InfoClass } from '../../Interfaces/personaje.interface';
import { RequestService } from '../../Services/requestService/request.service';
import { CommonModule, CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { InfoPersonajeComponent } from '../info-personaje/info-personaje.component';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [RouterOutlet, UpperCasePipe, DatePipe, CurrencyPipe, CommonModule, InfoPersonajeComponent],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})

export class PersonajesComponent implements OnInit{

  URL_BASE = 'https://rickandmortyapi.com/api/character?page=';
  element = '/character?page=';

  deshabilitado: boolean = true;
  personajeList: Result[] = [];
  localizacion: Location[] = [];
  page = 1;
  infoClass: InfoClass = { count: 826, pages: 42, next: this.URL_BASE+this.page, prev: null };
 

  constructor(private requestService: RequestService, private router: Router) {  }

  ngOnInit(): void {
    console.log('PersonajesComponent initialized');
    this.getAllPersonajes();
  }

  getAllPersonajes() {
    this.requestService.getPersonajes().subscribe({
      next: (result) => {
        this.personajeList = result.results;
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }

  navigateToInfoPersonaje(): void {
    this.router.navigate(['/info-personaje']);
  }


  nextPageForMore() {
    this.page = this.page + 1;

    this.requestService.nextPage(this.element, this.page).subscribe({
      next: (result) => {
        this.personajeList = result.results;
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }

  moreInfo(idPersonaje: number) {
    this.requestService.getMoreInfo(idPersonaje).subscribe({
      next: (result) =>{
        this.personajeList = result.results;
      },
      error: (err) => {
        console.log(err);
      }
    })
}

  previousPageForLess() {
    this.page = this.page - 1;

    this.requestService.previousPage(this.element, this.page).subscribe({
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
