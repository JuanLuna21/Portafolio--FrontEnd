import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hys } from 'src/app/model/hys';

import { HysS } from 'src/app/service/hys.service';


@Component({
  selector: 'app-edit-hys',
  templateUrl: './edit-hys.component.html',
  styleUrls: ['./edit-hys.component.css']
})
export class EditHysComponent implements OnInit {

  hysM: Hys = null;


  constructor(private hysS: HysS, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.hysS.detail(id).subscribe(
      data => {
        this.hysM = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )

  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hysS.update(id, this.hysM).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }



}
