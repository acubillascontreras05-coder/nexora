import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { AuthService, Usuario } from './services/auth.service';
import { ParticleBackgroundComponent } from './background/particle-background.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, ParticleBackgroundComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nexora');
  menuAbierto = false;

  constructor(public authService: AuthService, private router: Router) {}

  get usuario(): Usuario | null {
    return this.authService.obtenerUsuario();
  }

  get estaLogueado(): boolean {
    return this.authService.estaAutenticado();
  }

  toggleMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu(): void {
    this.menuAbierto = false;
  }

  cerrarSesion(): void {
    this.authService.logout();
    this.router.navigate(['/']);
    this.cerrarMenu();
  }
}