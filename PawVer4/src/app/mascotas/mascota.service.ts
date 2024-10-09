import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mascota } from './mascota';
import { Tratamiento } from '../registrar-tratamiento/tratamiento';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  
  private baseUrl = 'http://localhost:8090/mascotas'

  constructor(private http: HttpClient) {}

  // Método para obtener todas las mascotas
  getMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(this.baseUrl);
  }

  // Método para obtener una mascota por ID
  getMascota(id: number): Observable<Mascota> {
    return this.http.get<Mascota>(`${this.baseUrl}/${id}`);
  }

  // Método para actualizar una mascota
  updateMascota(mascota: Mascota): Observable<Mascota> {
    return this.http.put<Mascota>(`${this.baseUrl}/${mascota.id}`, mascota);
  }

  // Método para eliminar una mascota
  deleteMascota(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Método para obtener mascotas por cédula del dueño
  getMascotasByCedula(cedula: string): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(`${this.baseUrl}?duenoCedula=${cedula}`);
  }

  // Método para agregar una nueva mascota
  addMascota(mascota: Mascota): Observable<Mascota> {
    return this.http.post<Mascota>(this.baseUrl, mascota);
  }

  addTratamiento(mascotaId: number, tratamiento: Tratamiento): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/mascotas/${mascotaId}/tratamientos`, tratamiento);
  }
}
