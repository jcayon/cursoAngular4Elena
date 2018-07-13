/// improtaciones que necesita para ser un modulo
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importa la clase del componente ( la que exportabamos)
import { AppComponent } from './app.component';
import { FechaComponent } from './fecha/fecha.component';
import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
  //declaraciones , diferentes elementos de tipo vista que va a tener la aplicacion 
  // directivas 
  //componentes 
  //pipes
  declarations: [
    AppComponent,
    FechaComponent,
    CopyrightComponent
  ],

  //importamos los modulos externos que voy a usar
  // por ejemplo un formulario
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // solo en el módulo raíz se pone esta propiedad. que indica cual es la raiz
})
export class AppModule { }
