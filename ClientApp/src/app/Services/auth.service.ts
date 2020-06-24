import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    constructor(private _router: Router) {}

    login(nombre: string, rol: string, identificacion: string) {

        sessionStorage.setItem('user', nombre);
        sessionStorage.setItem('identificontcacion', identificacion);
        sessionStorage.setItem('roles', JSON.stringify([rol]));        
        if(rol === 'RECEPCIONISTA'){
            this._router.navigate(['/Recepcionista/NuevaReserva']);
        }else{
            if(rol === 'CLIENTE'){
                this._router.navigate(['/Cliente/NuevaReserva']);
            }else{
                this._router.navigate(['/#']);
            }
        }
    }

    logout() {
        sessionStorage.clear();
        this._router.navigate(['/Inicio']);
    }

    isAuthenticated(): boolean {
        return sessionStorage.getItem('user')!=null;
    }

    hasRole(rol: string): boolean {
        if (!this.isAuthenticated()) return false;
        let roles: string[] = JSON.parse(sessionStorage.getItem('roles'));
        return roles.indexOf(rol) >= 0;
    }

    getUserName(): string {
        return sessionStorage.getItem('user') != null ? sessionStorage.getItem('user'):'Anonimo';
    }
}