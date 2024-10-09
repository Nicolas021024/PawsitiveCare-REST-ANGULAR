import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente'; 

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:8090/api/clientes'; 

  constructor(private http: HttpClient) { }

  // Método para obtener todas las clientes
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl); // Llama a la API REST para obtener los clientes
  }

  // Método para obtener un cliente por ID
  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`); // Llama a la API REST para obtener un cliente específico
  }

  // Método para actualizar un cliente
  updateCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiUrl}/${cliente.id}`, cliente); // Llama a la API REST para actualizar un cliente
  }

  // Método para eliminar un cliente
  deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`); // Llama a la API REST para eliminar un cliente
  }

  // Método para agregar un cliente
  addCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente); // Llama a la API REST para agregar un nuevo cliente
  }
}
