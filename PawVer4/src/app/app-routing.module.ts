import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmigosPeludosComponent } from './mascotas/amigos-peludos/amigos-peludos.component';
import { MascotaEditarComponent } from './mascotas/mascota-editar/mascota-editar.component';
import { MascotaEliminarComponent } from './mascotas/mascota-eliminar/mascota-eliminar.component';
import { MascotaAgregarComponent } from './mascotas/mascota-agregar/mascota-agregar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginSelectionComponent } from './login-selection/login-selection.component';
import { LoginVeterinarioComponent } from './login-veterinario/login-veterinario.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';
import { RegistrarTratamientoComponent } from './registrar-tratamiento/registrar-tratamiento.component';
import { AmigosClienteComponent } from './cliente/amigos-cliente/amigos-cliente.component';
import { ClienteEditarComponent } from './cliente/cliente-editar/cliente-editar.component';
import { ClienteAgregarComponent } from './cliente/cliente-agregar/cliente-agregar.component';
import { ClienteEliminarComponent } from './cliente/cliente-eliminar/cliente-eliminar.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'mascotas/amigos-peludos', component: AmigosPeludosComponent }, // Cambiado a la ruta correcta
  { path: 'editar-mascota/:id', component: MascotaEditarComponent },
  { path: 'eliminar-mascota/:id', component: MascotaEliminarComponent },
  { path: 'agregar-mascota', component: MascotaAgregarComponent },
  { path: 'login-selection', component: LoginSelectionComponent },
  { path: 'login-veterinario', component: LoginVeterinarioComponent },
  { path: 'login-cliente', component: LoginClienteComponent },
  { path: '', redirectTo: '/login-selection', pathMatch: 'full' }, // Redirección a login-selection por defecto
  { path: 'cliente', component: ClienteComponent },
  { path: 'veterinario', component: VeterinarioComponent },
  { path: 'registrar-tratamiento', component: RegistrarTratamientoComponent },
  { path: 'amigos-cliente', component: AmigosClienteComponent },
  { path: '**', redirectTo: '/login-selection' }, // Redirige a la página de inicio de sesión si la ruta no coincide
  { path: 'editar-cliente/:id', component: ClienteEditarComponent },
  { path: 'eliminar-cliente/:id', component: ClienteEliminarComponent },
  { path: 'agregar-cliente', component: ClienteAgregarComponent }, // Componente para agregar un cliente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
