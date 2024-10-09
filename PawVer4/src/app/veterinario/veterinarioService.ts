import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Veterinario } from './veterinario';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {
  private veterinarios: Veterinario[] = []; // Suponiendo que aquí tienes tus veterinarios
  private veterinarioLogueadoId: number | null = null; // Aquí deberías tener la lógica para obtener el ID del veterinario logueado

  getVeterinarioLogueado(): Observable<Veterinario | null> {
    // Busca el veterinario logueado
    const loggedInVeterinario = this.veterinarios.find(vet => vet.id === this.veterinarioLogueadoId);
    
    // Devuelve un Observable
    return of(loggedInVeterinario || null);
  }
}
