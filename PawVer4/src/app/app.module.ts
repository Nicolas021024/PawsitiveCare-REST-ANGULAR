import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';  // Importar el módulo de rutas
import { AppComponent } from './app.component';
import { AmigosPeludosComponent } from './mascotas/amigos-peludos/amigos-peludos.component';
import { MascotaEditarComponent } from './mascotas/mascota-editar/mascota-editar.component';
import { MascotaEliminarComponent } from './mascotas/mascota-eliminar/mascota-eliminar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MascotaAgregarComponent } from './mascotas/mascota-agregar/mascota-agregar.component';
import { LoginSelectionComponent } from './login-selection/login-selection.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { LoginVeterinarioComponent } from './login-veterinario/login-veterinario.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';
import { RegistrarTratamientoComponent } from './registrar-tratamiento/registrar-tratamiento.component';
import { VeterinarioService } from './veterinario/veterinarioService';
import { AmigosClienteComponent } from './cliente/amigos-cliente/amigos-cliente.component';
import { ClienteAgregarComponent } from './cliente/cliente-agregar/cliente-agregar.component';
import { ClienteEditarComponent } from './cliente/cliente-editar/cliente-editar.component';
import { ClienteEliminarComponent } from './cliente/cliente-eliminar/cliente-eliminar.component';
import { MascotaService } from './mascotas/mascota.service';

@NgModule({
  declarations: [
    AppComponent,
    AmigosPeludosComponent,
    MascotaEditarComponent,
    MascotaEliminarComponent,
    HeaderComponent,
    FooterComponent,
    MascotaAgregarComponent,
    LoginSelectionComponent,
    LoginClienteComponent,
    LoginVeterinarioComponent,
    ClienteComponent,
    VeterinarioComponent,
    RegistrarTratamientoComponent,
    AmigosClienteComponent,
    ClienteAgregarComponent,
    ClienteEditarComponent,
    ClienteEliminarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,  // Mantén la importación del módulo de rutas aquí
    HttpClientModule
  ],
  providers: [MascotaService,
  VeterinarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MascotaModule { }
