import { Component, OnInit } from '@angular/core';
import { Hys } from 'src/app/model/hys';
import { HysS } from 'src/app/service/hys.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {

  hysM: Hys[] = [];

  constructor(private hysS: HysS, private tokenService: TokenService) { }
  isLogged = false;
  isAdmin = false;
  roles: string[];

  ngOnInit(): void {
    this.hysS.lista()
      .subscribe(data => {
        this.hysM = data;
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

    this.hysS.lista().subscribe(
      data => {
        this.hysM = data;
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.hysS.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se eliminó");
        }
      )
    }
  }

}
