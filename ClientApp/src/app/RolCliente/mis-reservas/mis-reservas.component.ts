import { Component, OnInit } from '@angular/core';
import { ReservaService} from '../../services/reserva.service'
import { Reserva } from '../../Clases/reserva'

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent implements OnInit {

  constructor(
    private reservaSerice: ReservaService, 
    ) { }

    reservas: Reserva[];

  ngOnInit() {
    this.getAll();
  }

  x:string;

  getAll() {
    this.x=sessionStorage.getItem('identificontcacion');
    this.reservaSerice.getMisReservas(this.x).subscribe(reservas => this.reservas = reservas);
  }

  delete(reserva: Reserva): void {
    reserva.estado="CANCELADA";
    this.reservaSerice.cambiarEstato(reserva).subscribe(() => this.getAll());
  }

}
