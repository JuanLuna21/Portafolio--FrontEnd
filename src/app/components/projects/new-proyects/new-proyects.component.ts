import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyects',
  templateUrl: './new-proyects.component.html',
  styleUrls: ['./new-proyects.component.css']
})
export class NewProyectsComponent implements OnInit {

  id: number = 0;
  nombreP: string = '';
  descripcionP: string = '';
  imgP: string = "";
  base="";

  proyectos: Proyecto = new Proyecto(0, "", "", "");
  constructor(private sProyecto: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  obtener(e: any) {
    console.log(e);
    this.base = e[0].base64;
  }

  onCreate(): void {
    this.imgP=this.base;
    const proyecto = new Proyecto(this.id, this.nombreP, this.descripcionP, this.imgP);
    this.sProyecto.save(proyecto).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert('error');
        this.router.navigate(['']);
      }
    )
  }


}
