import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url = 'http://localhost:8080/Persons';


  constructor() { }
}
