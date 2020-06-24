import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevaReservaRecepcionistaComponent} from "../app/RolRecepcionista/nueva-reserva-recepcionista/nueva-reserva-recepcionista.component"
import { InicioComponent } from '../app/PaginaPublica/inicio/inicio.component'

const routes: Routes = [

  { path:'', component:  InicioComponent, pathMatch: 'full' },
  { path:'Recepcionista/NuevaReserva', component:  NuevaReservaRecepcionistaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
