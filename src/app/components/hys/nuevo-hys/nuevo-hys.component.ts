import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hys } from 'src/app/model/hys';

import { HysS } from 'src/app/service/hys.service';

@Component({
  selector: 'app-nuevo-hys',
  templateUrl: './nuevo-hys.component.html',
  styleUrls: ['./nuevo-hys.component.css']
})
export class NuevoHysComponent implements OnInit {

  nombreH: string = "";
  descripcionH: string = "";
  porcentajeH: 0;



  constructor(private hysS: HysS, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hys = new Hys(this.nombreH, this.descripcionH, this.porcentajeH);
    this.hysS.save(hys).subscribe(
      data => {
        alert("Educacion añadida");
        this.router.navigate(['']);
      }, err => {
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }
}
