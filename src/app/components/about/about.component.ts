import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  person: person[] = [];

  constructor(public personService: PersonService, private router: Router, private tokenService: TokenService) { }
  isLogged = false;
  isAdmin = false;
  roles: string[];

  ngOnInit(): void {
    this.personService.getPersona().subscribe(data => { this.person = data })


    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });

  }

  Nuevo() {
    this.router.navigate(["add"]);
  }

  Editar(persona: person): void {
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(persona: person) {
    this.personService.deletePersona(persona)
      .subscribe(data => {
        this.person = this.person.filter(p => p !== persona);
        alert("Persona eliminado...");
      })
  }


}
