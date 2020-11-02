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
import { DatosComponent } from './RolRecepcionista/ProcesarReserva/datos/datos.component';
import { ServiciosDeReservaComponent } from './RolRecepcionista/ProcesarReserva/servicios-de-reserva/servicios-de-reserva.component';
import { FacturaDeReservaComponent } from './RolRecepcionista/ProcesarReserva/factura-de-reserva/factura-de-reserva.component';
import { NavBarClienteComponent } from './RolCliente/nav-bar-cliente/nav-bar-cliente.component';
import { NuevaReservaClienteComponent } from './RolCliente/nueva-reserva-cliente/nueva-reserva-cliente.component';
import { MisReservasComponent } from './RolCliente/mis-reservas/mis-reservas.component';
import { MiCuentaComponent } from './RolCliente/mi-cuenta/mi-cuenta.component';
import { ModalConsultarHabitacionesComponent } from './Modals/modal-consultar-habitaciones/modal-consultar-habitaciones.component';
import { ModalConsultarReservasComponent } from './Modals/modal-consultar-reservas/modal-consultar-reservas.component';
import { NavBarAdministradorComponent } from './RolAdministrador/nav-bar-administrador/nav-bar-administrador.component';
import { ConsultarReservasAdministradorComponent } from './RolAdministrador/consultar-reservas-administrador/consultar-reservas-administrador.component';
import { NuevaReservaAdministradorComponent } from './RolAdministrador/nueva-reserva-administrador/nueva-reserva-administrador.component';
import { GestionarHabitacionesComponent } from './RolAdministrador/gestionar-habitaciones/gestionar-habitaciones.component';
import { GestionarProductosComponent } from './RolAdministrador/gestionar-productos/gestionar-productos.component';
import { GestionarPersonalComponent } from './RolAdministrador/gestionar-personal/gestionar-personal.component';

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
    DatosComponent,
    ServiciosDeReservaComponent,
    FacturaDeReservaComponent,
    NavBarClienteComponent,
    NuevaReservaClienteComponent,
    MisReservasComponent,
    MiCuentaComponent,
    ModalConsultarHabitacionesComponent,
    ModalConsultarReservasComponent,
    NavBarAdministradorComponent,
    ConsultarReservasAdministradorComponent,
    NuevaReservaAdministradorComponent,
    GestionarHabitacionesComponent,
    GestionarProductosComponent,
    GestionarPersonalComponent,
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
    DatosComponent,
    ServiciosDeReservaComponent,
    FacturaDeReservaComponent,
    MiCuentaComponent,
    ModalConsultarHabitacionesComponent,
    ModalConsultarReservasComponent,
    NuevaReservaAdministradorComponent,
    
  ]
})
export class AppModule { }
