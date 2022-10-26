import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TokenService } from '../../service/token.service';


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})

export class LogoComponent implements OnInit {

  isLogged = false;

  constructor(private router: Router, private TokenService: TokenService) { }

  ngOnInit(): void {

    if (this.TokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogout(): void {
    this.TokenService.logOut();
    window.location.reload();
    this.router.navigate(['/login']);
  }

  login() {
    this.router.navigate(['/login']);
  }
}
