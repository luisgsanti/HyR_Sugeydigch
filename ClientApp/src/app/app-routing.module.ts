import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevaReservaRecepcionistaComponent} from "../app/RolRecepcionista/nueva-reserva-recepcionista/nueva-reserva-recepcionista.component"
import { InicioComponent } from '../app/PaginaPublica/inicio/inicio.component'
import { ReservasRecepcionistaComponent} from '../app/RolRecepcionista/reservas-recepcionista/reservas-recepcionista.component'
import { HabitacionesRecepcionistaComponent} from '../app/RolRecepcionista/habitaciones-recepcionista/habitaciones-recepcionista.component'
import { ClientesRecepcionistaComponent} from '../app/RolRecepcionista/clientes-recepcionista/clientes-recepcionista.component'
import { MisReservasComponent} from '../app/RolCliente/mis-reservas/mis-reservas.component'
import { NuevaReservaClienteComponent} from '../app/RolCliente/nueva-reserva-cliente/nueva-reserva-cliente.component'
import { ConsultarReservasAdministradorComponent} from '../app/RolAdministrador/consultar-reservas-administrador/consultar-reservas-administrador.component'
import { GestionarHabitacionesComponent} from '../app/RolAdministrador/gestionar-habitaciones/gestionar-habitaciones.component'
import { GestionarPersonalComponent} from '../app/RolAdministrador/gestionar-personal/gestionar-personal.component'
import { GestionarProductosComponent} from '../app/RolAdministrador/gestionar-productos/gestionar-productos.component'
import { GestionarClientesComponent} from '../app/RolAdministrador/gestionar-clientes/gestionar-clientes.component'

const routes: Routes = [

  { path:'', component:  InicioComponent, pathMatch: 'full' },
  { path:'Recepcionista/NuevaReserva', component:  NuevaReservaRecepcionistaComponent },
  { path:'Recepcionista/ConsultarReservas', component:ReservasRecepcionistaComponent },
  { path:'Recepcionista/ConsultarHabitaciones', component:HabitacionesRecepcionistaComponent },
  { path:'Recepcionista/ConsultarClientes', component:ClientesRecepcionistaComponent },
  { path:'Cliente/NuevaReserva', component:NuevaReservaClienteComponent },
  { path:'Cliente/MisReservas', component:MisReservasComponent },
  { path:'Administrador/GestionarReservas', component:ConsultarReservasAdministradorComponent },
  { path:'Administrador/GestionarHabitaciones', component:GestionarHabitacionesComponent },
  { path:'Administrador/GestionarPersonal', component:GestionarPersonalComponent },
  { path:'Administrador/GestionarProductos', component:GestionarProductosComponent },
  { path:'Administrador/GestionarClientes', component:GestionarClientesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
