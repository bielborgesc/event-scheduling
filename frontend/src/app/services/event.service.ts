import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/event'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }

  create(event: any): Observable<any> {
    return this.http.post(`${baseUrl}`, event);
  }

  update(event: any, idEvent: number): Observable<any> {
    return this.http.put(`${baseUrl}/${idEvent}`, event);
  }

  findOne(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
