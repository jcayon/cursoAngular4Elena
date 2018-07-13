import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../servicios/cliente.service';
import { Cliente } from '../../model/cliente.model';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  // lo normal es crear una propiedad 
  clientes: Array<Cliente>;

  // se intancia el servicio en el constructor 
  // private clienteService: ClienteService() {}
  // en documentacion los servicios privados lo ponen con _ 
  // pero angular dice que no hace falta
  // recordar que el constructor es la primera fase del ciclo de vida de un componente

  constructor( private clienteService: ClienteService) {   
  }

  ngOnInit() {
    this.clientes = this.clienteService.getCliente();
  }

}
