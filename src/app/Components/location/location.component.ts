import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { InfoClass, Location } from '../../Interfaces/location.interface';
import { LocationService } from '../../Services/location.service';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})

export class LocationComponent implements OnInit{

  URL_BASE = 'https://rickandmortyapi.com/api/location?page=';

  deshabilitado: boolean = true;
  localizaciones: Location[] = [];
  page = 1;
  infoClass: InfoClass = { count: 126, pages: 7, next: this.URL_BASE+this.page, prev: null };
 
  constructor(private locationService: LocationService) {  }

  ngOnInit(): void {
    console.log('LocationComponent initialized');
    this.getAllLocations();
  }

  getAllLocations() {
    this.locationService.getLocations().subscribe({
      next: (result) => {
        this.localizaciones = result.results;
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }

  nextPageForMore() {
    this.page = this.page + 1;

    this.locationService.nextPage(this.page).subscribe({
      next: (result) => {
        this.localizaciones = result.results;
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }

  previousPageForLess() {
    this.page = this.page - 1;

    this.locationService.previousPage(this.page).subscribe({
      next: (result) => {
        this.localizaciones = result.results;
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
