import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Importa RouterModule aquí si es necesario

import { MascotaEditarComponent } from './mascota-editar/mascota-editar.component';
import { AmigosPeludosComponent } from './amigos-peludos/amigos-peludos.component';
import { MascotaService } from './mascota.service';
import { MascotaEliminarComponent } from './mascota-eliminar/mascota-eliminar.component';
import { MascotaAgregarComponent } from './mascota-agregar/mascota-agregar.component';

@NgModule({
  declarations: [
    MascotaEditarComponent,
    AmigosPeludosComponent,
    MascotaEliminarComponent,
    MascotaAgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule // Asegúrate de importar RouterModule si este módulo usa enrutamiento
  ],
  providers: [MascotaService]
})
export class MascotaModule { }
