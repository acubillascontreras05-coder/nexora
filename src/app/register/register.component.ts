import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  nombre = '';
  email = '';
  password = '';
  confirmarPassword = '';
  cargando = false;
  errorMensaje = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  onSubmit(): void {
    this.errorMensaje = '';

    if (!this.nombre || !this.email || !this.password || !this.confirmarPassword) {
      this.errorMensaje = 'Completa todos los campos.';
      return;
    }

    if (this.password.length < 6) {
      this.errorMensaje = 'La contraseña debe tener al menos 6 caracteres.';
      return;
    }

    if (this.password !== this.confirmarPassword) {
      this.errorMensaje = 'Las contraseñas no coinciden.';
      return;
    }

    this.cargando = true;

    this.authService.registrar(this.nombre, this.email, this.password).subscribe({
      next: () => {
        this.cargando = false;
        this.cdr.detectChanges();
         this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.cargando = false;
        this.errorMensaje = err.error?.mensaje || 'No se pudo crear la cuenta. Intenta de nuevo.';
        this.cdr.detectChanges();
      }
    });
  }
}