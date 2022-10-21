import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educacion: Educacion[] = [];

  constructor(private educacionS: EducacionService, private tokenService: TokenService) { }
  isLogged = false;
  isAdmin = false;
  roles: string[];


  ngOnInit(): void {
    this.educacionS.lista()
      .subscribe(data => {
        this.educacion = data;
      })

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

  cargarEducacion(): void {

    this.educacionS.lista().subscribe(
      data => {
        this.educacion = data;
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.educacionS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se eliminó");
        }
      )
    }
  }

}
