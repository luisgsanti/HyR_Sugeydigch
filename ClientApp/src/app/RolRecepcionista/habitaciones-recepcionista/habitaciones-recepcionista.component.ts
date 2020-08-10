import { Component, OnInit } from '@angular/core';
import { HabitacionService} from '../../services/habitacion.service'
import { Habitacion } from '../../Clases/habitacion'


@Component({
  selector: 'app-habitaciones-recepcionista',
  templateUrl: './habitaciones-recepcionista.component.html',
  styleUrls: ['./habitaciones-recepcionista.component.css']
})
export class HabitacionesRecepcionistaComponent implements OnInit {

  habitaciones: Habitacion[];

  constructor( private habitacionservice: HabitacionService,) { }

  ngOnInit() {
    this.getAll();
  }

  /*open(){
    //this.modalService.open(RegistrarseComponent, {centered:true});
    this.modalService.open(RegistrarseComponent, { size: 'lg' });
    //modalRef.componentInstance.docente = docente;
  }*/

  getAll() {
    this.habitacionservice.getAll().subscribe(habitaciones => this.habitaciones = habitaciones);
  }
}
