import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivang-style',
  templateUrl: './directivang-style.component.html',
  styleUrls: ['./directivang-style.component.css']
})
export class DirectivangStyleComponent implements OnInit {
  puntuacion:number;

  constructor() { }

  ngOnInit() {
  }

  colorPuntuacion(){
    return this.puntuacion >= 5 ? 'green' : 'red';
  }
}
