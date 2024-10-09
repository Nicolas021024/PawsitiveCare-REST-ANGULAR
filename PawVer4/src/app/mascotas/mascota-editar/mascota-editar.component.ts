import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../mascota.service';
import { Mascota } from '../mascota';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mascota-editar',
  templateUrl: './mascota-editar.component.html',
  styleUrls: ['./mascota-editar.component.css']
})
export class MascotaEditarComponent implements OnInit {
  mascota: Mascota = this.getDefaultMascota();
  loading: boolean = true;  // Para manejar el estado de carga
  error: string | null = null;  // Para manejar errores

  constructor(
    private mascotaService: MascotaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.mascotaService.getMascota(id).subscribe({
          next: (mascota) => {
            this.mascota = mascota || this.getDefaultMascota();
            this.loading = false;  // Finaliza la carga
          },
          error: (err) => {
            this.error = 'Error al obtener la mascota. Inténtalo nuevamente.';
            console.error(err);
            this.loading = false;  // Finaliza la carga
          }
        });
      }
    });
  }

  getDefaultMascota(): Mascota {
    return {
      id: 0,
      nombre: '',
      edad: 0,
      raza: '',
      enfermedad: '',
      foto: '',
      estado: true,
      duenoCedula: '',
      tratamientos: []
    };
  }

  onSubmit(): void {
    if (this.validateMascota(this.mascota)) {  // Validar antes de actualizar
      this.mascotaService.updateMascota(this.mascota).subscribe({
        next: () => {
          this.router.navigate(['/amigos-peludos']);
        },
        error: (err) => {
          this.error = 'Error al actualizar la mascota. Inténtalo nuevamente.';
          console.error(err);
        }
      });
    } else {
      this.error = 'Por favor, completa todos los campos requeridos.'; // Mensaje de error
    }
  }

  validateMascota(mascota: Mascota): boolean {
    return mascota.nombre.trim() !== '' && mascota.raza.trim() !== '';  // Agrega más validaciones según sea necesario
  }
}
