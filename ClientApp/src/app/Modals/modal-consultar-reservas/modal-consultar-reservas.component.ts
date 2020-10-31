import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../clases/reserva';
import { ReservaService} from '../../services/reserva.service'

@Component({
  selector: 'app-modal-consultar-reservas',
  templateUrl: './modal-consultar-reservas.component.html',
  styleUrls: ['./modal-consultar-reservas.component.css']
})
export class ModalConsultarReservasComponent implements OnInit {

  constructor(
    private reservaService: ReservaService,
  ) { }

  reservas: Reserva[];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.reservaService.getReservasActivas().subscribe(reservas => this.reservas = reservas);
  }

}
