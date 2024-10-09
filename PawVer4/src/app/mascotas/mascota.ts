import { Tratamiento } from '../registrar-tratamiento/tratamiento'; 

export interface Mascota {
  id: number;                          // ID de la mascota
  nombre: string;                      // Nombre de la mascota
  edad: number;                        // Edad de la mascota
  raza: string;                        // Raza de la mascota
  enfermedad: string;                  // Enfermedad de la mascota
  foto: string;                        // URL de la foto de la mascota
  estado: boolean;                     // Estado activo/inactivo
  duenoCedula: string;                // Cédula del dueño
  tratamientos: Tratamiento[];         // Lista de tratamientos de la mascota
}
