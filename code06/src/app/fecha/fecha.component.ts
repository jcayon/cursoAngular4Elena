import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha', // para renderizar
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit {

  fecha: object;


  constructor() { }

  // los componentes en angular tienen un ciclo de vida, una serie de estados hasta destruirse.
  // se produce casi inmediatamente al cargarse el componente

  ngOnInit() {
    // queremos que se carge la fecha actual
    // usamos this por estar dentro del "metodo"
    this.fecha = new Date();




  }

}
