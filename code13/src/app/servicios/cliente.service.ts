import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente.model';

@Injectable({

  // nuevo en angular 6 
  providedIn: 'root'

  // para anteriores  angular lo importas en el app.component en el provider
  // tambien se puede importar directamente en el componente ( solo valdría para ese componente )
  // añadiendo el providers: [nombreService] donde tenemos el selector

})
export class ClienteService {


  clientes: Array<Cliente> = [
    { nombre: 'Iberdrola',  cif: 'A123456'},
    { nombre: 'Gas Natural',  cif: 'B123456'},
    { nombre: 'Vodafone',  cif: 'C123456'}
   ];

   // si ponemos <h1> Bienvenido {{clienteService.username}} </h1>
   // en modo pro  peta
   // pero si lo ponemos publico ya funcionaria
   username: string = 'Pedro';

  constructor() { }

  //getCliente(){     Mejor si tipamos la salida ( ver abajo)
  getCliente(): Array<Cliente> {
    return this.clientes;
  }

  postCliente(cliente){
    this.clientes.push(cliente);
  }

}
