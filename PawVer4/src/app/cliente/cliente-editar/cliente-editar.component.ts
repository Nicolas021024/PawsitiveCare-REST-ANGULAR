import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service'; // Cambia el servicio por ClienteService
import { Cliente } from '../cliente'; // Asegúrate de importar el modelo Cliente
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.css']
})
export class ClienteEditarComponent implements OnInit {
  
  cliente: Cliente = {
    id: 0,
    nombre: '',
    cedula: 0,
    correo: '',
    numero: ''
  };

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.clienteService.getCliente(id).subscribe(
          cliente => {
            this.cliente = cliente || this.getDefaultCliente(); // Usa un valor predeterminado si cliente es undefined
          },
          (error) => {
            console.error('Error al obtener el cliente:', error);
            // Manejo de errores si es necesario
          }
        );
      }
    });
  }

  getDefaultCliente(): Cliente {
    return { id: 0, nombre: '', cedula: 0, correo: '', numero: '' }; // Valor predeterminado para un cliente
  }

  onSubmit(): void {
    this.clienteService.updateCliente(this.cliente).subscribe(
      () => {
        this.router.navigate(['/amigos-clientes']); // Redirige a la lista de clientes después de guardar
      },
      (error) => {
        console.error('Error al actualizar el cliente:', error);
        // Manejo de errores si es necesario
      }
    );
  }
}
