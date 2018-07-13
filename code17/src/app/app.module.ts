import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CrearClientesComponent } from './clientes/crear-clientes/crear-clientes.component';
import { CrearFacturasComponent } from './facturas/crear-facturas/crear-facturas.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearClientesComponent,
    CrearFacturasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
