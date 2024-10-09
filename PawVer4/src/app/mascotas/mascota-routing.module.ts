import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { MascotaEditarComponent } from './mascota-editar/mascota-editar.component';
import { MascotaService } from './mascota.service';
import { MascotaAgregarComponent } from './mascota-agregar/mascota-agregar.component';
import { MascotaEliminarComponent } from './mascota-eliminar/mascota-eliminar.component';


@NgModule({
  declarations: [
    MascotaEditarComponent,
    MascotaAgregarComponent,  
    MascotaEliminarComponent
  ],
  imports: [
    CommonModule,
    FormsModule // Agrega FormsModule aquí
  ],
  providers: [MascotaService],
  exports: [] // Asegúrate de no exportar MascotaEditarComponent si no lo necesitas fuera de este módulo
})
export class MascotaModule { }
