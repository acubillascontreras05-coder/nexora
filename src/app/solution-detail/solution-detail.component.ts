import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SOLUCIONES, Solucion } from '../data/solutions.data';

@Component({
  selector: 'app-solution-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './solution-detail.component.html',
  styleUrl: './solution-detail.component.css'
})
export class SolutionDetailComponent implements OnChanges {
  @Input() slug: string = '';
  solucion: Solucion | undefined;

  ngOnChanges(): void {
    this.solucion = SOLUCIONES.find(s => s.slug === this.slug);
  }
}