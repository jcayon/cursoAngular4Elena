import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  jugadores : any[] = [
    {nombre: 'Isaia Thomas', puntos:0, imagen: 'assets/thomas.png'},
    {nombre: 'Kyle Kuzma', puntos:0, imagen: 'assets/kuzma.png'},
    {nombre: 'Julius Randle', puntos:0, imagen: 'assets/randle.png'},
    {nombre: 'Brandom Ingram', puntos:0, imagen: 'assets/ingram.png'},
    {nombre: 'Brook Lopez', puntos:0, imagen: 'assets/lopez.png'}
  ];

  puntosEquipo= 0;

  constructor() { }

  ngOnInit() {
  }

  //tiene que tener como parametro un objeto por lo general se llama event
  getCanasta(event){
    this.puntosEquipo += event.puntos;
    this.jugadores.forEach(jugador => { 
      if(jugador.nombre === event.nombre){
        jugador.puntos += event.puntos;
      }
      
      
    });
  }
}
