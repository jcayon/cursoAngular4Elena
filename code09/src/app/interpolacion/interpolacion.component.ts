import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {
  jugador= {
    nombre: 'lionel',
    apellido: 'Mesi',
    fNac: 1986
  }

  constructor() { }

  ngOnInit() {
  }

  // como estamos dentro de una clase no hay que poner function

  getEdad(){
    return new Date().getFullYear() - this.jugador.fNac;
  }

}
