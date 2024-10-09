import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from '../mascota.service';

@Component({
  selector: 'app-mascota-eliminar',
  templateUrl: './mascota-eliminar.component.html',
  styleUrls: ['./mascota-eliminar.component.css']
})
export class MascotaEliminarComponent implements OnInit {
  id: number | undefined;
  error: string | null = null; // Para manejar errores
  loading: boolean = false; // Para manejar el estado de carga

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mascotaService: MascotaService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
  }

  confirmarEliminacion(): void {
    if (this.id !== undefined && confirm('¿Estás seguro de que deseas eliminar esta mascota?')) {
      this.loading = true; // Indica que se está procesando la eliminación
      this.eliminar();
    }
  }

  eliminar(): void {
    if (this.id !== undefined) {
      this.mascotaService.deleteMascota(this.id).subscribe({
        next: () => {
          this.router.navigate(['/amigos-peludos']);
        },
        error: (error) => {
          this.loading = false; // Finaliza la carga
          this.error = 'Error al eliminar la mascota. Inténtalo nuevamente.'; // Mensaje de error
          console.error('Error al eliminar la mascota', error);
        }
      });
    }
  }
}
