import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavComponent } from './nav/nav.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { VerClienteComponent } from './clientes/ver-cliente/ver-cliente.component';
import { LoginGuard } from './login.guard';
import { ComunesModule } from './comunes/comunes.module';
import { RrhhModule } from './rrhh/rrhh.module';

const rutas: Routes = [
  {path: '', component: InicioComponent},
  {path: 'listado-clientes', component: ListadoClientesComponent, data: {titulo: 'Lista de clientes'}},
  {path: 'ver-cliente/:id', component: VerClienteComponent, canActivate: [LoginGuard]},
  // path a otro modulo, como usamos el lazy loading n es necesario meterlo en el ngModule
  // ya que no queremos que se carge al inicio si no cuando accedemos
  {path: 'recursos-humanos', loadChildren: 'src/app/rrhh/rrhh.module#RrhhModule'}, 
  {path: '**', component: InicioComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavComponent,
    ListadoClientesComponent,
    VerClienteComponent
  ],
  imports: [
    BrowserModule,
    ComunesModule,
    RrhhModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
