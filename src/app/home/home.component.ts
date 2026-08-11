import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SERVICIOS, Servicio } from '../data/services.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: '../app.css'
})
export class HomeComponent {
  servicios: Servicio[] = SERVICIOS;
  indiceCarrusel = 0;
  porPagina = 3;

  get serviciosVisibles(): Servicio[] {
    return this.servicios.slice(this.indiceCarrusel, this.indiceCarrusel + this.porPagina);
  }

  get puedeRetroceder(): boolean {
    return this.indiceCarrusel > 0;
  }

  get puedeAvanzar(): boolean {
    return this.indiceCarrusel + this.porPagina < this.servicios.length;
  }

  anterior(): void {
    if (this.puedeRetroceder) {
      this.indiceCarrusel--;
    }
  }

  siguiente(): void {
    if (this.puedeAvanzar) {
      this.indiceCarrusel++;
    }
  }
}