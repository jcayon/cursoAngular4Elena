import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: Array<any> = [
    {id:1, nombre: 'iberdrola', cif: 'A123456'},
    {id:2, nombre: 'vodafone', cif: 'B123456'},
    {id:3, nombre: 'Gas natural', cif: 'C123456'},
  ]
  constructor() { }

  getClientes(){
    return this.clientes;
  }

  getCliente(id){
    const clienteSel = this.clientes.find( cliente => {
      return cliente.id == id;  // cuando pillas el id de la ruta es string ¡cuidadin!
    });
    return clienteSel;
  }
}
