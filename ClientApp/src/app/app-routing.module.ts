import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevaReservaRecepcionistaComponent} from "../app/RolRecepcionista/nueva-reserva-recepcionista/nueva-reserva-recepcionista.component"
import { InicioComponent } from '../app/PaginaPublica/inicio/inicio.component'
import { ReservasRecepcionistaComponent} from '../app/RolRecepcionista/reservas-recepcionista/reservas-recepcionista.component'
import { HabitacionesRecepcionistaComponent} from '../app/RolRecepcionista/habitaciones-recepcionista/habitaciones-recepcionista.component'
import { ClientesRecepcionistaComponent} from '../app/RolRecepcionista/clientes-recepcionista/clientes-recepcionista.component'

const routes: Routes = [

  { path:'', component:  InicioComponent, pathMatch: 'full' },
  { path:'Recepcionista/NuevaReserva', component:  NuevaReservaRecepcionistaComponent },
  { path:'Recepcionista/ConsultarReservas', component:ReservasRecepcionistaComponent },
  { path:'Recepcionista/ConsultarHabitaciones', component:HabitacionesRecepcionistaComponent },
  { path:'Recepcionista/ConsultarClientes', component:ClientesRecepcionistaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
