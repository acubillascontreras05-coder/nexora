import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';

interface Particula {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

@Component({
  selector: 'app-particle-background',
  standalone: true,
  imports: [],
  templateUrl: './particle-background.component.html',
  styleUrl: './particle-background.component.css'
})
export class ParticleBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private particulas: Particula[] = [];
  private animationId = 0;
  private readonly cantidad = 70;
  private readonly distanciaMax = 140;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resize();
    this.crearParticulas();
    this.animar();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
  }

  @HostListener('window:resize')
  resize(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private crearParticulas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.particulas = [];
    for (let i = 0; i < this.cantidad; i++) {
      this.particulas.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4
      });
    }
  }

  private animar = (): void => {
    const canvas = this.canvasRef.nativeElement;
    const ctx = this.ctx;

    ctx.fillStyle = '#07111f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (const p of this.particulas) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x <= 0 || p.x >= canvas.width) p.vx *= -1;
      if (p.y <= 0 || p.y >= canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(56, 189, 248, 0.7)';
      ctx.fill();
    }

    for (let i = 0; i < this.particulas.length; i++) {
      for (let j = i + 1; j < this.particulas.length; j++) {
        const a = this.particulas[i];
        const b = this.particulas[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.distanciaMax) {
          const opacidad = 1 - dist / this.distanciaMax;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${opacidad * 0.35})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    this.animationId = requestAnimationFrame(this.animar);
  };
}