import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service'; // Asumiendo que tienes un ClienteService

@Component({
  selector: 'app-cliente-eliminar',
  templateUrl: './cliente-eliminar.component.html',
  styleUrls: ['./cliente-eliminar.component.css']
})
export class ClienteEliminarComponent implements OnInit {
  id: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService // Usar ClienteService en lugar de MascotaService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      if (this.id !== undefined) {
        this.eliminar();
      }
    });
  }

  eliminar(): void {
    if (this.id !== undefined) {
      this.clienteService.deleteCliente(this.id).subscribe({
        next: () => {
          this.router.navigate(['/amigos-clientes']); // Cambiar la ruta a 'amigos-clientes'
        },
        error: (error) => {
          console.error('Error al eliminar el cliente', error);
          // Opcionalmente, muestra un mensaje de error al usuario
        }
      });
    }
  }
}
