import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-veterinario',
  templateUrl: './login-veterinario.component.html',
  styleUrls: ['./login-veterinario.component.css']
})
export class LoginVeterinarioComponent {
  cedula: string = '';
  clave: string = '';
  error: string | null = null;

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.error = null; // Resetea el mensaje de error

    // Validación básica de los campos
    if (!this.cedula || !this.clave) {
      this.error = 'Por favor, complete todos los campos.';
      return;
    }

    const success = this.authService.loginVeterinario(this.cedula, this.clave);
    if (!success) {
      this.error = 'Cédula o clave incorrecta';
    }
  }
}
