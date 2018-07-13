import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextoComponent } from './texto/texto.component';
import { GlosarioDirective } from './directivas/glosario.directive';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { NavComponent } from './nav/nav.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    TextoComponent,
    GlosarioDirective,
    ListadoClientesComponent,
    NavComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
