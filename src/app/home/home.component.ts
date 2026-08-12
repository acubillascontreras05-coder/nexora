import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
export class HomeComponent implements AfterViewInit {
  servicios: Servicio[] = SERVICIOS;
  indiceCarrusel = 0;
  porPagina = 3;

  @ViewChild('heroVideo') heroVideoRef?: ElementRef<HTMLVideoElement>;
  @ViewChild('problemsVideo') problemsVideoRef?: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    this.asegurarReproduccion(this.heroVideoRef);
    this.asegurarReproduccion(this.problemsVideoRef);
  }

  private asegurarReproduccion(videoRef?: ElementRef<HTMLVideoElement>): void {
  const video = videoRef?.nativeElement;
  if (!video) return;

  video.load();

  const intentarPlay = () => {
    video.play().catch(() => {});
  };

  video.addEventListener('canplay', intentarPlay, { once: true });
  video.addEventListener('loadeddata', intentarPlay, { once: true });
}

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