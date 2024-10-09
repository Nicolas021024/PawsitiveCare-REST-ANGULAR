import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Veterinario } from './veterinario';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit {
  veterinario: Veterinario | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.veterinario = this.authService.getCurrentUser(); // Asigna el veterinario actual
    if (!this.veterinario) {
      this.router.navigate(['/login-selection']);
    }
  }

  irAVerMascotas(): void {
    this.router.navigate(['/mascotas/amigos-peludos']);
  }

  irARegistrarTratamiento(): void {
    this.router.navigate(['/registrar-tratamiento']);
  }

  irAVerClientes(): void {
    this.router.navigate(['/cliente/amigos-cliente']);
  }
}
