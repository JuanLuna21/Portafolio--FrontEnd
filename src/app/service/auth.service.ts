import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'http://localhost:8080/auth/';
  authURL = 'https://portafolio-backend-production-789a.up.railway.app/auth/';

  constructor(private HttpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.HttpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario)
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.HttpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
  }
}
