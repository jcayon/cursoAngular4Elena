import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  user: any;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  getAdmin(): boolean{
    // si no ponemos  ? true : false da un casque o tipando la salida
    return this.user.rol === 'admin'; 
  }

}
