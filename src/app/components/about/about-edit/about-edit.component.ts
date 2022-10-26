import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.css']
})
export class AboutEditComponent implements OnInit {

  persona: person = new person(0, "", "", "", "", "");

  constructor(private router: Router, private service: PersonService) { }

  ngOnInit() {
    this.Editar();
  }

  obtener(e: any) {
    this.persona.img = e[0].base64;
  }

  Cancel() {
    this.router.navigate(['cancelar'])
  }


  Editar() {
    let id = localStorage.getItem("id");
    this.service.getPersonaId(+id)
      .subscribe(data => {
        this.persona = data;
      })
  }

  Actualizar(persona: person) {
    this.service.updatePersona(persona)
      .subscribe(data => {
        this.persona = data;
        alert("Se Actualizo con Exito!");
        this.router.navigate(['home']);
      })
  }
}
