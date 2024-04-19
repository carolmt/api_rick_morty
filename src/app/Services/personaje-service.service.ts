import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const URL_BASE = 'https://rickandmortyapi.com/api';

@Injectable({
  providedIn: 'root'
})
export class PersonajeServiceService {

  private httpClient = inject(HttpClient);

  constructor() { }

  getPersonajes() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
      return this.httpClient.get(`${URL_BASE}/character`, { headers });
  }

}
