import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente.model';

@Component({
  selector: 'app-directivangfor',
  templateUrl: './directivangfor.component.html',
  styleUrls: ['./directivangfor.component.css']
})
export class DirectivangforComponent implements OnInit {

  
  clientes: Array<Cliente> = [
    { nombre: 'Iberdrola',  cif: 'A123456'},
    { nombre: 'Gas Natural',  cif: 'B123456'},
    { nombre: 'Vodafone',  cif: 'C123456'}
   ];

  constructor() { }

  ngOnInit() {
  }

}
