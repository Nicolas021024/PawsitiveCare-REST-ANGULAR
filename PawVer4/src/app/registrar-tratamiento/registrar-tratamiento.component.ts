import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../mascotas/mascota.service';
import { Mascota } from '../mascotas/mascota';
import { Tratamiento } from './tratamiento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-tratamiento',
  templateUrl: './registrar-tratamiento.component.html',
  styleUrls: ['./registrar-tratamiento.component.css']
})
export class RegistrarTratamientoComponent implements OnInit {
  mascotas: Mascota[] = [];
  nuevoTratamiento: Tratamiento = {
    fecha: '',
    descripcion: '',
    mascotaId: 0,
    veterinarioId: 0
  };

  constructor(private mascotaService: MascotaService, private router: Router) {}

  ngOnInit(): void {
    // Obtener la lista de mascotas para mostrar en el formulario
    this.mascotaService.getMascotas().subscribe(mascotas => {
      this.mascotas = mascotas;
    });
  }

  registrarTratamiento(): void {
    // Buscar la mascota seleccionada por su ID
    const mascotaSeleccionada = this.mascotas.find(m => m.id === this.nuevoTratamiento.mascotaId);
    
    if (mascotaSeleccionada) {
      // Agregar el tratamiento a la lista de tratamientos de la mascota
      this.mascotaService.addTratamiento(mascotaSeleccionada.id, this.nuevoTratamiento).subscribe(() => {
        this.router.navigate(['/veterinario']);
      }, (error: any) => {
        console.error('Error al registrar el tratamiento', error);
      });
    }
  }
}
