import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { person } from '../model/person.model';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url = 'https://portafoliojuanluna.herokuapp.com/personas';


  constructor(private http: HttpClient) { }

  public getPersona() {
    return this.http.get<person[]>(this.url + '/traer');
  }

}
