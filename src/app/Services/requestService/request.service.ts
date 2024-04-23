import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

const URL_BASE = 'https://rickandmortyapi.com/api';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  httpClient = inject(HttpClient)

  constructor() { }

  getPersonajes(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
      return this.httpClient.get(URL_BASE + "/character", { headers }).pipe(res => res);
  }
  
  getLocations(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.httpClient.get(URL_BASE + "/location", { headers }).pipe(res => res);
  }

  getEpisodes(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
      return this.httpClient.get(URL_BASE + "/episode", { headers }).pipe(res => res);
  }

  getMoreInfo(idPersonaje :number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.httpClient.get(URL_BASE + "/character/" + idPersonaje, { headers }).pipe(res => res);
  }


  nextPage(element:string, page:number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
      return this.httpClient.get(URL_BASE + element + page, { headers }).pipe(res => res);
  }

  previousPage(element:string, page:number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
      return this.httpClient.get(URL_BASE + element+ page, { headers }).pipe(res => res);
  }

  filterByGender(gender: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.httpClient.get(URL_BASE + "/character/?gender=" + gender, { headers }).pipe(res => res); 
  }
  
}
