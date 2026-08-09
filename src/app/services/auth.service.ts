import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

const API_URL = 'https://nexora-login.up.railway.app/api/auth';
export interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

interface RespuestaAuth {
  mensaje: string;
  token: string;
  usuario: Usuario;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  registrar(
    nombre: string,
    email: string,
    password: string
  ): Observable<RespuestaAuth> {

    return this.http
      .post<RespuestaAuth>(
        `${API_URL}/register`,
        {
          nombre,
          email,
          password
        }
      )
      .pipe(
        tap(respuesta => this.guardarSesion(respuesta))
      );
  }

  login(
    email: string,
    password: string
  ): Observable<RespuestaAuth> {

    return this.http
      .post<RespuestaAuth>(
        `${API_URL}/login`,
        {
          email,
          password
        }
      )
      .pipe(
        tap(respuesta => this.guardarSesion(respuesta))
      );
  }

  private guardarSesion(
    respuesta: RespuestaAuth
  ): void {

    localStorage.setItem(
      'nexora_token',
      respuesta.token
    );

    localStorage.setItem(
      'nexora_usuario',
      JSON.stringify(respuesta.usuario)
    );
  }

  logout(): void {

    localStorage.removeItem('nexora_token');
    localStorage.removeItem('nexora_usuario');

  }

  obtenerToken(): string | null {

    return localStorage.getItem('nexora_token');

  }

  obtenerUsuario(): Usuario | null {

    const data =
      localStorage.getItem('nexora_usuario');

    return data
      ? JSON.parse(data)
      : null;
  }

  estaAutenticado(): boolean {

    return !!this.obtenerToken();

  }

}