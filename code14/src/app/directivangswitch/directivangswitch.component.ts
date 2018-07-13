import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivangswitch',
  templateUrl: './directivangswitch.component.html',
  styleUrls: ['./directivangswitch.component.css']
})
export class DirectivangswitchComponent implements OnInit {

  jugadores : any[] = [
    {nombre: 'Isaia Thomas', puntos:0, imagen: 'assets/thomas.png', equipo: "bulls"},
    {nombre: 'Kyle Kuzma', puntos:0, imagen: 'assets/kuzma.png', equipo: "bulls"},
    {nombre: 'Julius Randle', puntos:0, imagen: 'assets/randle.png', equipo: "celtics"},
    {nombre: 'Brandom Ingram', puntos:0, imagen: 'assets/ingram.png', equipo: "celtics"},
    {nombre: 'Brook Lopez', puntos:0, imagen: 'assets/lopez.png', equipo: "lakers"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
