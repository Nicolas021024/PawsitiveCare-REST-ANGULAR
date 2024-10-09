import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-amigos-cliente',
  templateUrl: './amigos-cliente.component.html',
  styleUrls: ['./amigos-cliente.component.css']
})
export class AmigosClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  nuevoCliente: Cliente = { id: 0, nombre: '', numero: '', correo: '', cedula: 0 }; // Define un cliente nuevo

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.cargarClientes(); // Carga los clientes al iniciar el componente
  }

  cargarClientes(): void {
    this.clienteService.getClientes().subscribe(
      (clientes) => {
        this.clientes = clientes;
      },
      (error) => {
        console.error('Error al cargar los clientes:', error);
      }
    );
  }

  eliminarCliente(id: number): void {
    this.clienteService.deleteCliente(id).subscribe(
      () => {
        this.clientes = this.clientes.filter(c => c.id !== id);
      },
      (error) => {
        console.error('Error al eliminar el cliente:', error);
      }
    );
  }

  agregarCliente(nuevoCliente: Cliente): void {
    this.clienteService.addCliente(nuevoCliente).subscribe(
      (cliente) => {
        this.clientes.push(cliente);
        this.nuevoCliente = { id: 0, nombre: '', numero: '', correo: '', cedula: 0 }; // Limpiar el formulario después de agregar
      },
      (error) => {
        console.error('Error al agregar el cliente:', error);
      }
    );
  }
}
