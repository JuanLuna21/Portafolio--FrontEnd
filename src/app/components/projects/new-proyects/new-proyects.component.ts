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

  nombreP: string = '';
  descripcionP: string = '';
  imgP: string = "";


  constructor(private sProyecto: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.imgP);
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
