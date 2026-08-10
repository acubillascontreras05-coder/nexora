import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SERVICIOS, Servicio } from '../data/services.data';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnChanges {
  @Input() slug: string = '';
  servicio: Servicio | undefined;

  ngOnChanges(): void {
    this.servicio = SERVICIOS.find(s => s.slug === this.slug);
  }
}