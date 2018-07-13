import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../servicios/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  constructor( public clienteService: ClienteService) { }

  ngOnInit() {
  }

  setCliente(){
    this.clienteService.postCliente({nombre: 'Telefonica', cif: 'D123456'});
  }

}
