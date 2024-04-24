import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RequestService } from '../../Services/requestService/request.service';
import { Episode, InfoClass } from '../../Interfaces/episode.interface';
import { Result } from '../../Interfaces/personaje.interface';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.css'
})
export class EpisodeComponent implements OnInit{

  URL_BASE = 'https://rickandmortyapi.com/api/episode?page=';
  element = '/episode?page=';

  deshabilitado: boolean = true;
  episodes: Episode[] = [];
  page = 1;
  infoClass: InfoClass = { count: 51, pages: 3, next: this.URL_BASE+this.page, prev: null };
  imgPersonajes: any[] = [];

  // @Input() personajeList: Result[] = [];

  constructor(private requestService: RequestService) {  }

  ngOnInit(): void {
    console.log('EpisodeComponent initialized');
    this.getAllEpisodes();
    // this.obtenerImagenesPersonajes();
  }

  // private obtenerImagenesPersonajes(): void {
  //   this.imgPersonajes = this.personajeList.map(personaje => personaje.image);
  // }

  getAllEpisodes() {
    this.requestService.getEpisodes().subscribe({
      next: (result) => {
        this.episodes = result.results;
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }

  cargaImg(urls: string[] = []) {
    this.requestService.getImgChar(urls).subscribe({
      next: (result: any[]) => {
        // 'result' es un array con los resultados de las solicitudes
        this.imgPersonajes = result.map(res => res.image);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  nextPageForMore() {
    this.page = this.page + 1;

    this.requestService.nextPage(this.element, this.page).subscribe({
      next: (result) => {
        this.episodes = result.results;
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }

  previousPageForLess() {
    this.page = this.page - 1;

    this.requestService.previousPage(this.element, this.page).subscribe({
      next: (result) => {
        this.episodes = result.results;
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
