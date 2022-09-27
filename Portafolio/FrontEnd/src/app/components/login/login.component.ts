import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { TokenService } from '../../service/token.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  islogged = false;
  islogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.islogged = true;
      this.islogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data => { this.islogged = true; this.islogginFail = false; this.tokenService.setToken(data.token); this.tokenService.setUserName(data.nombreUsuario); this.tokenService.setAuthorities(data.authorities); this.roles = data.authorities; this.router.navigate(['']) }, err => {
      this.islogged = false;
      this.islogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
    })
  }

}
