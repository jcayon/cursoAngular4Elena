import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  texto = 'ciudad de Santander';

  id = "00000003";

  fecha = new Date;

  importe = 12.123456789;

  aciertos= 0.0878;

  jugador = {
    nombre: 'Crstiano',
    apellido: "Ronaldo"

  };

  cantidad = 1200.183273472857245;

  ngOnInit(){


  }
}
