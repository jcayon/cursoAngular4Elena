import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css']
})
export class CrearClientesComponent implements OnInit {
 // @ViewChild('formCliente') // me falsa

  cliente:any;

  constructor() { }

  ngOnInit() {
  }

  crearCliente(formCliente){
    this.cliente = {
      nombre: formCliente.controls.nombre.value,
      cif: formCliente.controls.cif.value,
      email: formCliente.controls.email.value,
      created: new Date()
    }
    
    
  }

}
