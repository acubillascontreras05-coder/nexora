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
    const esMovil = window.innerWidth <= 700;

    this.prepararVideo(
      this.heroVideoRef,
      esMovil ? '/videos/nexora-bg-mobile.mp4' : '/videos/nexora-bg.mp4'
    );

    this.prepararVideo(
      this.problemsVideoRef,
      esMovil ? '/videos/problemas-mobile.mp4' : '/videos/14492092_1920_1080_30fps.mp4'
    );
  }

  private prepararVideo(videoRef: ElementRef<HTMLVideoElement> | undefined, src: string): void {
    const video = videoRef?.nativeElement;
    if (!video) return;

    const source = video.querySelector('source');
    if (source) {
      source.src = src;
    }

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