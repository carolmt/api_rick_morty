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

  getPagesCharacter(): Observable<any> {
    return this.httpClient.get(URL_BASE + "/character").pipe(res => res);
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

  filterBy(filter: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });

    switch (filter) {
      case ('Human'): 
        return this.httpClient.get(URL_BASE + "/character/?species=" + filter, { headers }).pipe(res => res);
        break;   
      case ('Alien'):
        return this.httpClient.get(URL_BASE + "/character/?species=" + filter, { headers }).pipe(res => res);
        break;
      case ('Alive'):
        return this.httpClient.get(URL_BASE + "/character/?status=" + filter, { headers }).pipe(res => res);
        break;
      case ('Dead'):
        return this.httpClient.get(URL_BASE + "/character/?status=" + filter, { headers }).pipe(res => res);
        break
      case ('unknown'):
        return this.httpClient.get(URL_BASE + "/character/?status=" + filter, { headers }).pipe(res => res);
        break
      case ('Female'):
        return this.httpClient.get(URL_BASE + "/character/?&gender=" + filter, { headers }).pipe(res => res);
        break;
      case ('Male'):
        return this.httpClient.get(URL_BASE + "/character/?gender=" + filter, { headers }).pipe(res => res);
        break;
      case ('unknown'):
        return this.httpClient.get(URL_BASE + "/character/?gender=" + filter, { headers }).pipe(res => res);
        break;
      case ('genderless'):
        return this.httpClient.get(URL_BASE + "/character/?gender=" + filter, { headers }).pipe(res => res);
        break;
      case ('Todos'):
        return this.httpClient.get(URL_BASE + "/character", { headers }).pipe(res => res);
        break; 
      default:
        return this.httpClient.get(URL_BASE + "/character").pipe(res => res);
    }

  }
  
}
