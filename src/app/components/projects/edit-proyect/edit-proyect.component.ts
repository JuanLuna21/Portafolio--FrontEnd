import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css']
})
export class EditProyectComponent implements OnInit {


  proyectoM: Proyecto = null;
  proyecto: Proyecto = new Proyecto(0, "", "", "");

  constructor(private proyectoS: ProyectoService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
      data => {
        this.proyectoM = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )

  }

  obtener(e: any) {
    this.proyectoM.imgP = e[0].base64;
    console.log(this.proyectoM.imgP);
    console.log(e);
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.proyectoM).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

}
