import { Component, OnInit } from '@angular/core';
import { ReservaService} from '../../services/reserva.service'
import { ClienteService} from '../../services/cliente.service'
import { Reserva } from '../../Clases/Reserva'
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosComponent} from '../../RolRecepcionista/ProcesarReserva/datos/datos.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
//import { RegistrarseComponent} from '../../Inicio/NavBar/registrarse/registrarse.component'
import { Cliente } from 'src/app/Clases/cliente';

import { NuevaReservaAdministradorComponent } from '../nueva-reserva-administrador/nueva-reserva-administrador.component' 


@Component({
  selector: 'app-consultar-reservas-administrador',
  templateUrl: './consultar-reservas-administrador.component.html',
  styleUrls: ['./consultar-reservas-administrador.component.css']
})
export class ConsultarReservasAdministradorComponent implements OnInit {

  reserva$: Observable<Reserva[]>;
  filter = new FormControl('');

  constructor( 
    private reservaSerice: ReservaService, 
    private _router: Router, 
    private modalService: NgbModal,
    private clienteService: ClienteService
    ) {}

   reservas: Reserva[];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.reservaSerice.getAll().subscribe(reservas => this.reservas = reservas);
  }

  cliente: Cliente;

  procesarReserva(reserva: Reserva){
    this.clienteService.get(reserva.idCliente).subscribe(clientee => {
      this.cliente = clientee;
      const modalRef =  this.modalService.open(DatosComponent, { size: 'xl' });
      modalRef.componentInstance.reserva = reserva;
      modalRef.componentInstance.cliente = clientee;
      setTimeout(()=> {
        
      },1300)
    });
  }

  delete(reserva: Reserva): void {
    reserva.estado="CANCELADA";
    this.reservaSerice.cambiarEstato(reserva).subscribe(() => this.getAll());
  }

  open(){
    this.modalService.open(NuevaReservaAdministradorComponent, { size: 'xl' });
  }

}
