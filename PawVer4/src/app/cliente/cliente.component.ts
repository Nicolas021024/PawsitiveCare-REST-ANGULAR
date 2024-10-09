import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MascotaService } from '../mascotas/mascota.service';
import { Mascota } from '../mascotas/mascota';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  public mascotas: Mascota[] = [];

  constructor(
    public authService: AuthService,
    private mascotaService: MascotaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const cliente = this.authService.getCurrentUser();
    if (cliente) {
      this.cargarMascotasPorCliente(cliente.cedula);
    } else {
      // Redirigir al login si no hay cliente autenticado
      this.router.navigate(['/login-selection']);
    }
  }

  cargarMascotasPorCliente(cedula: string): void {
    this.mascotaService.getMascotas().subscribe(
      (mascotas: Mascota[]) => {
        this.mascotas = mascotas.filter((m: Mascota) => m.duenoCedula === cedula);
      },
      (error) => {
        console.error('Error al cargar las mascotas', error);
      }
    );
  }
}
