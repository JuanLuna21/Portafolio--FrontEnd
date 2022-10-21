import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from '../../service/s-experiencia.service';
import { TokenService } from '../../service/token.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {

  expe: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;
  isAdmin = false;
  roles: string[];

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

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


  cargarExperiencia(): void {

    this.sExperiencia.lista().subscribe(data => { this.expe = data })



  }


  delete(id?: number) {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe(
        _data => {
          this.cargarExperiencia();
        }, _err => {
          alert('no se pudo borrar');
        }
      )
    }
  }





}
