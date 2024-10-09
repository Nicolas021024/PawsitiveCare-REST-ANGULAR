// veterinario.ts
export interface Mascota {
  id: number;
  nombre: string;
  raza: string;
  edad: number;
}

export interface Veterinario {
  id: number;
  nombre: string;
  cedula: string;
  mascotas: Mascota[];
  foto: string;
}
