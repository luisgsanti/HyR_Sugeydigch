import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../../Clases/cliente';
import { Reserva } from '../../../Clases/reserva';
import { Servicio } from 'src/app/Clases/servicio';
import { Habitacion } from '../../../Clases/habitacion';
import { ClienteService } from '../../../services/cliente.service'
import { ReservaService } from '../../../services/reserva.service'
import { HabitacionService } from '../../../services/habitacion.service'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { ServicioService } from 'src/app/services/servicio.service';

import { DetallesFactura } from 'src/app/Clases/detalles-factura';

import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-factura-de-reserva',
  templateUrl: './factura-de-reserva.component.html',
  styleUrls: ['./factura-de-reserva.component.css']
})
export class FacturaDeReservaComponent implements OnInit {

  constructor( public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private servicioService: ServicioService,
    private reservaService: ReservaService,
    private habitacionService: HabitacionService,
    ) { }

    modal : NgbModalRef;
    registerForm: FormGroup;

  @Input() reserva: Reserva;
  @Input() cliente: Cliente;


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      idCliente: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      fechaSalida: ['', Validators.required],
      habitaciones: ['', Validators.required],
      diasEstadia: ['', Validators.required],
      
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      genero: ['', Validators.required],
      fechaNacimiento:  ['', Validators.required], 
      correo: [''],
      telefono:  [''],
    });
    this.getDetalles();
  }

  servicios: Servicio[];
  detalle: DetallesFactura;
  detalles: DetallesFactura[];
  totalAPagar: number;


  getDetalles(){
    this.detalle = new DetallesFactura;
    this.detalle.monto=0;
    this.servicioService.getServicios(this.reserva.id).subscribe(servicios =>{ 
      this.servicios = servicios;
     this.servicios.forEach(item => {
        this.detalle.monto= this.detalle.monto + item.monto;
        this.totalAPagar=this.detalle.monto;
      });
    });
  }

  descargar(){
    const options = {
      filename: 'Factura-'+ this.cliente.identificacion+'-'+this.reserva.id+'.pdf',
      image: {type: 'jpeg'},
      html2canvas: {}
    };
    const content: Element = document.getElementById('element-by-export');

    html2pdf()
    .from(content)
    .set(options)
    .save();

    alert("DESCARGANDO FACTURA, POR FAVOR ESPERE...");
  }

  habitaciones: Habitacion[];

  finalizar(){
    this.reserva.estado="FINALIZADA";
    this.reserva.totalPagado= this.totalAPagar;
    this.reservaService.update(this.reserva)
      .subscribe();
    this.habitacionService.getAll().subscribe(habitaciones => {this.habitaciones = habitaciones
      this.habitaciones.forEach(item =>{
        if(item.numeroHabitacion== parseInt(this.reserva.habitaciones)){
          
          item.estado = "DISPONIBLE";
          this.habitacionService.update(item).subscribe();

        }
      });
    });
  }

}
