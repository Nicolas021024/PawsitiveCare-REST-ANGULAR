import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente'; // Ajusta la ruta según tu estructura de carpetas
import { ClienteService } from '../cliente.service'; // Asegúrate de que este servicio exista

@Component({
  selector: 'app-cliente-agregar',
  templateUrl: './cliente-agregar.component.html',
  styleUrls: ['./cliente-agregar.component.css']
})
export class ClienteAgregarComponent implements OnInit {
  newCliente: Cliente = {
    id: 0,
    nombre: '',
    cedula: 0,
    correo: '',
    numero: ''
  };

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {}

  agregarCliente(): void {
    this.clienteService.addCliente(this.newCliente).subscribe(
      () => {
        this.router.navigate(['/amigos-cliente']); // Cambia a la ruta que desees
      },
      (error) => {
        console.error('Error al agregar el cliente:', error);
      }
    );
  }
}
