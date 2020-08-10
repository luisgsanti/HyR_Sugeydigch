import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './PaginaPublica/inicio/inicio.component';
import { ServiciosInicioComponent } from './PaginaPublica/servicios-inicio/servicios-inicio.component';
import { HabitacionesInicioComponent } from './PaginaPublica/habitaciones-inicio/habitaciones-inicio.component';
import { LoginInicioComponent } from './PaginaPublica/login-inicio/login-inicio.component';
import { ContactenosInicioComponent } from './PaginaPublica/contactenos-inicio/contactenos-inicio.component';
import { NuevaReservaRecepcionistaComponent } from './RolRecepcionista/nueva-reserva-recepcionista/nueva-reserva-recepcionista.component';
import { NavBarRecepcionistaComponent } from './RolRecepcionista/nav-bar-recepcionista/nav-bar-recepcionista.component';
import { ReservasRecepcionistaComponent } from './RolRecepcionista/reservas-recepcionista/reservas-recepcionista.component';
import { HabitacionesRecepcionistaComponent } from './RolRecepcionista/habitaciones-recepcionista/habitaciones-recepcionista.component';
import { ClientesRecepcionistaComponent } from './RolRecepcionista/clientes-recepcionista/clientes-recepcionista.component';
import { NuevoClienteRecepcionistaComponent } from './RolRecepcionista/nuevo-cliente-recepcionista/nuevo-cliente-recepcionista.component';
import { ModificarClienteRecepcionistaComponent } from './RolRecepcionista/modificar-cliente-recepcionista/modificar-cliente-recepcionista.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServiciosInicioComponent,
    HabitacionesInicioComponent,
    LoginInicioComponent,
    ContactenosInicioComponent,
    NuevaReservaRecepcionistaComponent,
    NavBarRecepcionistaComponent,
    ReservasRecepcionistaComponent,
    HabitacionesRecepcionistaComponent,
    ClientesRecepcionistaComponent,
    NuevoClienteRecepcionistaComponent,
    ModificarClienteRecepcionistaComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ContactenosInicioComponent,
    HabitacionesInicioComponent,
    ServiciosInicioComponent,
    LoginInicioComponent,
    NuevoClienteRecepcionistaComponent,
    ModificarClienteRecepcionistaComponent,
  ]
})
export class AppModule { }
