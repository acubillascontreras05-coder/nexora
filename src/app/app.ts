import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { AuthService, Usuario } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nexora');

  constructor(public authService: AuthService, private router: Router) {}

  get usuario(): Usuario | null {
    return this.authService.obtenerUsuario();
  }

  get estaLogueado(): boolean {
    return this.authService.estaAutenticado();
  }

  cerrarSesion(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}