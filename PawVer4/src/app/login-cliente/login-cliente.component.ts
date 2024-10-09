// login-cliente.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent {
  cedula: string = '';
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.error = null;
    this.authService.loginCliente(this.cedula).subscribe(
      (success) => {
        if (!success) {
          this.error = 'Cédula incorrecta';
        }
      },
      (error) => {
        console.error('Error en la autenticación:', error);
        this.error = 'Error en la autenticación. Inténtalo de nuevo.';
      }
    );
  }
}
