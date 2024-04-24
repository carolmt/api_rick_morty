import { Component, inject, LOCALE_ID, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Result, Location, Info, InfoClass } from '../../Interfaces/personaje.interface';
import { RequestService } from '../../Services/requestService/request.service';
import { CommonModule, CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { InfoPersonajeComponent } from '../info-personaje/info-personaje.component';
import { NumberValueAccessor } from '@angular/forms';
import { PersonajeService } from '../../Services/PersonajeService/personaje.service';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [RouterOutlet, UpperCasePipe, DatePipe, CurrencyPipe, CommonModule, InfoPersonajeComponent],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})

export class PersonajesComponent implements OnInit{
Number(arg0: string) {
throw new Error('Method not implemented.');
}

  URL_BASE = 'https://rickandmortyapi.com/api/character?page=';
  element = '/character?page=';
  currentFilter: string = '';

  deshabilitado: boolean = true;
  personajeList: Result[] = [];
  localizacion: Location[] = [];
  page = 1;
  pages: InfoClass[] = [];
  total_pages : number = 0;
  total_characters: number = 0;
 

  constructor(private requestService: RequestService, private router: Router, private personajeService: PersonajeService) {  }

  ngOnInit() {
    console.log('PersonajesComponent initialized');
    this.getAllPersonajes();
    this.calcularPaginasTotales();
    this.calcularPersonajesTotales();
  }

  calcularPaginasTotales(filter: string = '') {
    this.requestService.filterBy(filter).subscribe({
      next: (result) => {
        return this.total_pages = result.info.pages;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  calcularPersonajesTotales() {
    this.requestService.getPagesCharacter().subscribe({
      next: (result) => {
        return this.total_characters = result.info.count;
      },
      error: (err) => {
        console.log(err);
      }
    });
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

  filterBy(filter:string) {
    this.currentFilter = filter;
    this.page = 1;
    this.requestService.filterBy(filter).subscribe({
      next: (result) => {
        return this.total_pages = result.info.pages;
  }}),

  this.requestService.filterBy(filter).subscribe({
    next: (result) => {
      return this.total_characters = result.info.count;
}}),

    this.requestService.filterBy(filter).subscribe({
      next: (result) => {
        this.personajeList = result.results;
      },
      error: (err) => {
        console.log(err);
      }
    })
  
  }


  nextPageForMore() {
    this.page = this.page + 1;

    this.personajeService.changePage(this.currentFilter, this.page).subscribe({
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

    this.personajeService.changePage(this.currentFilter, this.page).subscribe({
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


  habilitarBoton() {
    this.deshabilitado = false;
  }

  deshabilitarBoton() {
    this.deshabilitado = true;
  }
}
