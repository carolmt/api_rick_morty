import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

const URL_BASE = 'https://rickandmortyapi.com/api/location?page=';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private httpClient = inject(HttpClient);
  
  constructor() { }

  getLocations(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
    return this.httpClient.get(URL_BASE, { headers }).pipe(res => res);
  }

  nextPage(page:number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
      return this.httpClient.get(URL_BASE + page, { headers }).pipe(res => res);
  }

  previousPage(page:number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    });
      return this.httpClient.get(URL_BASE + page, { headers }).pipe(res => res);
  }


}
