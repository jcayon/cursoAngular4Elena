import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  //decorador @imput recibe una propiedad del padre

  @Input() jugadores;

  // Ojo!!! Cuidadin con el import de EventEmitter tiene que ser del core
  @Output() canasta: EventEmitter<any> = new EventEmitter();

  topJugadores: any[];

  constructor() { }

  ngOnInit() {
    //usamos en metodo ngOnInit para que al cargar se igualen 
    // esto es para independizar el array de al izquierda y de la derecha
    this.topJugadores= this.jugadores.concat();

  }

  setCanasta(puntos, nombre){
    this.canasta.emit({puntos, nombre});
    //this.jugadores.sort((a, b) => {
    this.topJugadores.sort((a, b) => {
      return (b.puntos -a.puntos);
    });
  }

}
