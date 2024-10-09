import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-selection',
  templateUrl: './login-selection.component.html',
  styleUrls: ['./login-selection.component.css']
})
export class LoginSelectionComponent {
  constructor(private router: Router) {}

  navigateToLogin(tipo: string) {
    if (tipo === 'cliente') {
      this.router.navigate(['/login-cliente']);
    } else if (tipo === 'veterinario') {
      this.router.navigate(['/login-veterinario']);
    }
  }
}
