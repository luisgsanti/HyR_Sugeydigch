import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService} from '../../services/cliente.service'
import { Cliente } from '../../Clases/cliente'
import { variable } from '@angular/compiler/src/output/output_ast';
import { HabitacionService} from '../../Services/habitacion.service';
import { ReservaService } from '../../services/reserva.service'
import { Habitacion } from '../../Clases/habitacion'

import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Reserva } from '../../Clases/reserva'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { from } from 'rxjs';
import { Servicio} from '../../Clases/servicio'
import { ServicioService} from '../../services/servicio.service'
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { NuevoClienteRecepcionistaComponent} from '../../RolRecepcionista/nuevo-cliente-recepcionista/nuevo-cliente-recepcionista.component'
import { ModalConsultarHabitacionesComponent} from '../../Modals/modal-consultar-habitaciones/modal-consultar-habitaciones.component'
import { ModalConsultarReservasComponent} from '../../Modals/modal-consultar-reservas/modal-consultar-reservas.component'


@Component({
  selector: 'app-nueva-reserva-administrador',
  templateUrl: './nueva-reserva-administrador.component.html',
  styleUrls: ['./nueva-reserva-administrador.component.css']
})
export class NuevaReservaAdministradorComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
     private clienteservice: ClienteService, 
    private habitacionservice: HabitacionService, 
    private formBuilder: FormBuilder,
    private reservaSercive: ReservaService,
    private servicioService: ServicioService,
  ) { }

  clientes: Cliente[];
  habitaciones: Habitacion[];
  reserva: Reserva;

  servicio: Servicio; 

  ngOnInit() {
    this.getHabitaciones();
    this.registerForm = this.formBuilder.group({
      fechaIngreso: ['',Validators.required],
      fechaSalida: ['',Validators.required],
      habitaciones:  ['', Validators.required], 
    });

    this.reserva = new Reserva();
  }

  open(){
    this.modalService.open(NuevoClienteRecepcionistaComponent, { size: 'lg' });
  }

  getClientes() {
    this.clienteservice.getAll().subscribe(clientes => this.clientes = clientes);
  }

  getHabitaciones() {
    this.habitacionservice.getAll().subscribe(habitaciones => this.habitaciones = habitaciones);
  }

  registerForm: FormGroup;
  submitted = false;

  fechas(): number{
    var fecha1 = new Date(this.reserva.fechaIngreso);
    var fecha2 = new Date(this.reserva.fechaSalida);

    if(fecha2.getTime()<=fecha1.getTime()){
      return null
    }else{
      var diferencia = Math.abs(fecha2.getTime()-fecha1.getTime());
      console.log("diferencia", diferencia);
      var dias= (diferencia/(1000*60*60*24));
      console.log("dias", dias);
      return dias;
    }
  }

  reservas: Reserva[];

  add(id: string, fechaActual: Date) {
    
    var dias=this.fechas();
    if(dias != null){
      //alert(dias.toString());
    }

    var confirmar:boolean;
    var habitacion = this.reserva.habitaciones;
    var Fecha1 = new Date(this.reserva.fechaIngreso);
    var Fecha2 = new Date(this.reserva.fechaSalida);

    
      this.reservaSercive.getAll().subscribe(reservas => {
        this.reservas = reservas
        var x=0;
        this.reservas.forEach(item => {
          if(item.estado=="ACTIVA" || item.estado=="EN ESPERA"){
            if(item.habitaciones==habitacion){
              var Reserva1 = new Date(item.fechaIngreso);
              var Reserva2 = new Date(item.fechaSalida);
              if(Fecha1.getTime()>Reserva1.getTime() && Fecha1.getTime()<Reserva2.getTime()){
                x=x+1;
              }else{
                if(Fecha2.getTime()>Reserva1.getTime() && Fecha2.getTime()<Reserva2.getTime()){
                  x=x+1;
                }else{
                  if(Reserva1.getTime()>=Fecha1.getTime() && Reserva1.getTime()<Fecha2.getTime()){
                    x=x+1;
                  }
                }
              }
            }
          }
        });

        if(x==0){

          if(Fecha1.getDate()==fechaActual.getDate()){
            this.reserva.estado = "ACTIVA";
          }else{
            this.reserva.estado = "EN ESPERA";
          }
          
          this.reserva.idCliente = id;
          
          var diferencia = Math.abs(Fecha2.getTime()-Fecha1.getTime());
          var dias= (diferencia/(1000*60*60*24));

          this.reserva.diasEstadia = dias;

          this.reservaSercive.add(this.reserva).subscribe((newReserva: Reserva) => {
            this.servicio = new Servicio;

            this.servicio.idReserva = newReserva.id;
            this.servicio.nombreServicio = "HABITACION";
            this.servicio.cantidad = dias;

            this.habitaciones.forEach(item =>{
              if(item.numeroHabitacion== parseInt(newReserva.habitaciones)){
                
                if(Fecha1.getDate()==fechaActual.getDate()){
                  item.estado = "OCUPADA";
                  this.habitacionservice.update(item).subscribe();
                }
                this.servicio.precio=item.precio;
                this.servicio.monto = this.servicio.precio* this.servicio.cantidad;
                this.servicioService.addServicoReserva(this.servicio).subscribe();
              }
            });
          });
          this.registerForm.reset();
        }else{
          alert("LA HABITACION ELEGIDA NO ESTA DIPONIBLE EN LA FECHA ESTABLECIDA");
        }
      });        
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(id: string) {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    var fefe = year+'-'+month+'-'+(day-1);
    var fechaActual=new Date(fefe);

    var Fecha1 = new Date(this.reserva.fechaIngreso);
    var Fecha2 = new Date(this.reserva.fechaSalida);
    
    if(Fecha1.getTime()<fechaActual.getTime() || Fecha1.getTime()>=Fecha2.getTime()){
      alert("ERROR, FECHAS INCONSISTENTES");
    }else{
      this.add(id, fechaActual);
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  ModalHabitaciones(){
    this.modalService.open(ModalConsultarHabitacionesComponent, { size: 'lg' });
  }

  ModalReservas(){
    this.modalService.open(ModalConsultarReservasComponent, { size: 'lg' });
  }

}
