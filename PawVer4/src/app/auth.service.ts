// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;
  private baseUrl = 'http://localhost:8090/api/login';

  constructor(private router: Router, private http: HttpClient) {}

  loginCliente(cedula: string): Observable<boolean> {
    return this.http.post<any>(`${this.baseUrl}/cliente`, { cedula }).pipe(
      map(response => {
        this.currentUser = response;
        this.router.navigate(['/clientes']);
        return true;
      }),
      catchError((error) => {
        console.error('Error al autenticar cliente:', error);
        return of(false);
      })
    );
  }

  loginVeterinario(cedula: string, clave: string): Observable<boolean> {
    return this.http.post<any>(`${this.baseUrl}/veterinario`, { cedula, clave }).pipe(
      map(response => {
        this.currentUser = response;
        this.router.navigate(['/veterinario']);
        return true;
      }),
      catchError((error) => {
        console.error('Error al autenticar veterinario:', error);
        return of(false);
      })
    );
  }

  logout(): void {
    this.currentUser = null;
    this.router.navigate(['/login-selection']);
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
