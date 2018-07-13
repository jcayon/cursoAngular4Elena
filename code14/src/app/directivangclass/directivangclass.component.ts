import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivangclass',
  templateUrl: './directivangclass.component.html',
  styleUrls: ['./directivangclass.component.css']
})
export class DirectivangclassComponent implements OnInit {

  puntuacion: number;

  constructor() { }

  ngOnInit() {
  }

  colorPuntuacion(){
    return this.puntuacion >= 5 ? 'green' : 'red';
  }

}
