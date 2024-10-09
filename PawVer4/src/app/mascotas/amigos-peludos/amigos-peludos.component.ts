import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MascotaService } from '../mascota.service';
import { Mascota } from '../mascota';

@Component({
  selector: 'app-amigos-peludos',
  templateUrl: './amigos-peludos.component.html',
  styleUrls: ['./amigos-peludos.component.css']
})
export class AmigosPeludosComponent implements OnInit {
  mascotas: Mascota[] = [];

  constructor(private mascotaService: MascotaService, private router: Router) {}

  ngOnInit(): void {
    this.loadMascotas();
  }

  loadMascotas(): void {
    this.mascotaService.getMascotas().subscribe({
      next: (mascotas: Mascota[]) => {
        this.mascotas = mascotas;
      },
      error: (error) => {
        console.error('Error al cargar las mascotas', error);
        // Opcionalmente, muestra un mensaje de error al usuario
      }
    });
  }

  agregarPeludo(): void {
    this.router.navigate(['/agregar-mascota']);
  }

  eliminarMascota(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta mascota?')) {
      this.mascotaService.deleteMascota(id).subscribe({
        next: () => {
          this.loadMascotas();  // Recargar la lista de mascotas después de eliminar
        },
        error: (error) => {
          console.error('Error al eliminar la mascota', error);
          // Opcionalmente, muestra un mensaje de error al usuario
        }
      });
    }
  }
}
