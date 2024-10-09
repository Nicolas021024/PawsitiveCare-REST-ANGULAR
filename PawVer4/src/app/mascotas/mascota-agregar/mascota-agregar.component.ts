import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MascotaService } from '../mascota.service';
import { Mascota } from '../mascota';

@Component({
  selector: 'app-mascota-agregar',
  templateUrl: './mascota-agregar.component.html',
  styleUrls: ['./mascota-agregar.component.css']
})
export class MascotaAgregarComponent {
  newMascota: Mascota = {
    id: 0,
    nombre: '',
    edad: 0,
    raza: '',
    enfermedad: '',
    foto: '',
    estado: true,
    duenoCedula: '',
    tratamientos: []  // Incluye la propiedad `tratamientos`
  };

  constructor(private mascotaService: MascotaService, private router: Router) {}

  agregarMascota(): void {
    // Validación de campos (puedes agregar más validaciones según sea necesario)
    if (!this.newMascota.nombre || !this.newMascota.raza) {
      alert('Por favor, completa todos los campos requeridos.');
      return;
    }

    this.mascotaService.getMascotas().subscribe(mascotas => {
      const maxId = Math.max(...mascotas.map(m => m.id), 0);
      this.newMascota.id = maxId + 1; // Asigna el nuevo ID

      this.mascotaService.addMascota(this.newMascota).subscribe({
        next: () => {
          this.router.navigate(['/amigos-peludos']);
          this.resetForm(); // Reinicia el formulario después de agregar
        },
        error: (error) => {
          console.error('Error al agregar la mascota', error);
          alert('Ocurrió un error al agregar la mascota. Por favor, intenta nuevamente.'); // Muestra un mensaje de error al usuario
        }
      });
    });
  }

  // Método para restablecer el formulario
  resetForm(): void {
    this.newMascota = {
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
}
