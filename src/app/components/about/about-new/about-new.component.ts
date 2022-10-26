import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-about-new',
  templateUrl: './about-new.component.html',
  styleUrls: ['./about-new.component.css']
})
export class AboutNewComponent implements OnInit {

  persona: person = new person(0, "", "", "", "", "");
  constructor(private router: Router, private service: PersonService) { }

  ngOnInit() {
  }

  obtener(e: any) {
    this.persona.img = e[0].base64;
  }

  Guardar() {
    this.service.createPersona(this.persona)
      .subscribe(data => {
        this.persona = data;
        // alert("Se Agrego con Exito...!!!");
      });
        this.router.navigate([""]);
        // window.location.reload();
  }
}
