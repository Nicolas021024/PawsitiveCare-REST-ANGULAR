import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';
import { AmigosClienteComponent } from './amigos-cliente/amigos-cliente.component'; 
import { ClienteEliminarComponent } from './cliente-eliminar/cliente-eliminar.component';
import { ClienteAgregarComponent } from './cliente-agregar/cliente-agregar.component';
import { ClienteService } from './cliente.service';

@NgModule({
  declarations: [
    ClienteEditarComponent,
    AmigosClienteComponent,  // Actualizado a AmigosClienteComponent
    ClienteEliminarComponent,
    ClienteAgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule 
  ],
  providers: [ClienteService]
})
export class ClienteModule { }
