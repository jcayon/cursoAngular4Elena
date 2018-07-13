import { Component } from '@angular/core';

@Component({
  // nombre de la etiqueta que usamos para renderizar  suele llevar el prefijo app-nombrecomponente
  // en este caso como es el componente raiz es app-root
  selector: 'app-root', 
  // rutas relativas siempre y para html y css si que se pone la extension por no ser typescript
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class para renderizarlo y porque lo exportamos al modulo
export class AppComponent {
  // a las propiedades no hace falta poner un let porque están dentro de una clase
  title = '¡Hola Mundo!';
}
