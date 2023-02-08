import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { person } from '../model/person.model';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url = 'https://portafolio-backend-production-789a.up.railway.app/personas';

  URL = 'http://localhost:8080/personas';

  constructor(private http: HttpClient) { }
  // traer una lista de personas
  getPersona() {
    return this.http.get<person[]>(this.url + '/traer');
  }
  // crear una persona
  createPersona(persona: person) {
    return this.http.post<person>(this.url + '/crear', persona);
  }
  // traer una sola persona (para editar por ejemplo)
  getPersonaId(id: number) {
    return this.http.get<person>(this.url + "/" + id);
  }
  // editar persona
  updatePersona(persona: person) {
    return this.http.put<person>(this.url + "/editar/" + persona.id, persona);
  }
  // borrar persona
  deletePersona(persona: person) {
    return this.http.delete<person>(this.url + "/borrar/" + persona.id);
  }

}
