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

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const intentarPlay = () => {
      video.play().catch(() => {
        const reintentar = () => video.play().catch(() => {});
        document.addEventListener('click', reintentar, { once: true });
        document.addEventListener('touchstart', reintentar, { once: true });
        document.addEventListener('scroll', reintentar, { once: true });
      });
    };

    const source = video.querySelector('source');
    const srcActual = source?.getAttribute('src');
    const necesitaCambiarSrc = source && srcActual !== src;

    if (necesitaCambiarSrc) {
      source.src = src;
      video.addEventListener('canplay', intentarPlay, { once: true });
      video.addEventListener('loadeddata', intentarPlay, { once: true });
      video.load();
    } else if (video.readyState >= 3) {
      intentarPlay();
    } else {
      video.addEventListener('canplay', intentarPlay, { once: true });
      video.addEventListener('loadeddata', intentarPlay, { once: true });
    }
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