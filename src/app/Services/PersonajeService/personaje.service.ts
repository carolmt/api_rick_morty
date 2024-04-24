import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL_BASE = 'https://rickandmortyapi.com/api';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  httpClient = inject(HttpClient)

  constructor() { }

  changePage(filter:string, page:number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    switch (filter) {
      case ('Human'): 
        return this.httpClient.get(URL_BASE + "/character/?page=" +page+ "&species=" + filter, { headers }).pipe(res => res);
        break;   
      case ('Alien'):
        return this.httpClient.get(URL_BASE + "/character/?page=" +page+ "&species=" + filter, { headers }).pipe(res => res);
        break;
      case ('Alive'):
        return this.httpClient.get(URL_BASE + "/character/?page=" +page+ "&status=" + filter, { headers }).pipe(res => res);
        break;
      case ('Dead'):
        return this.httpClient.get(URL_BASE + "/character/?page=" +page+ "&status=" + filter, { headers }).pipe(res => res);
        break
      case ('unknown'):
        return this.httpClient.get(URL_BASE + "/character/?page=" +page+ "&status=" + filter, { headers }).pipe(res => res);
        break
      case ('Female'):
        return this.httpClient.get(URL_BASE + "/character/?page=" +page+ "&gender=" + filter, { headers }).pipe(res => res);
        break;
      case ('Male'):
        return this.httpClient.get(URL_BASE + "/character/?page=" +page+ "&gender=" + filter, { headers }).pipe(res => res);
        break;
      case ('unknown'):
        return this.httpClient.get(URL_BASE + "/character/?page=" +page+ "&gender=" + filter, { headers }).pipe(res => res);
        break;
      case ('genderless'):
        return this.httpClient.get(URL_BASE + "/character/?page=" +page+ "&gender=" + filter, { headers }).pipe(res => res);
        break;
      case ('Todos'):
        return this.httpClient.get(URL_BASE + "/character/?page=" +page , { headers }).pipe(res => res);
        break; 
      default:
        return this.httpClient.get(URL_BASE + "/character/?page=" +page ,).pipe(res => res);
    }

  }
}
