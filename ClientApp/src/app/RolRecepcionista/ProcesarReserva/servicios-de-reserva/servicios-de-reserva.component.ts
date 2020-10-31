import { Component, OnInit, Input } from '@angular/core';
import { Reserva } from '../../../Clases/reserva';
import { Cliente } from 'src/app/Clases/cliente';
import { Producto } from 'src/app/Clases/producto';
import { Servicio } from 'src/app/Clases/servicio';

import { ClienteService } from '../../../services/cliente.service';
import { ReservaService } from '../../../services/reserva.service';
import { ProductoService } from '../../../services/producto.service';
import { ServicioService } from 'src/app/services/servicio.service';


import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import{ DescuentosReservaComponent} from '../descuentos-reserva/descuentos-reserva.component';
//import{ AcompanantesComponent} from '../acompanantes/acompanantes.component';
import{ DatosComponent} from '../datos/datos.component';
import{ FacturaDeReservaComponent} from '../factura-de-reserva/factura-de-reserva.component'

@Component({
  selector: 'app-servicios-de-reserva',
  templateUrl: './servicios-de-reserva.component.html',
  styleUrls: ['./servicios-de-reserva.component.css']
})
export class ServiciosDeReservaComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private clienteService: ClienteService,
    private reservaService: ReservaService,
    private servicioService: ServicioService,
    private productoService: ProductoService,
    private formBuilder: FormBuilder
  ) { }

  registerForm: FormGroup;
  submitted = false;


  @Input() reserva: Reserva;
  servicio:Servicio;
  productos: Producto[];
  servicios:Servicio[];

  ngOnInit() {
    this.getProductos();
    this.getServicios();
    this.registerForm = this.formBuilder.group({
      nombreServicio: ['',Validators.required],
      cantidad: ['',Validators.required],
    });
    this.servicio = new Servicio();
  }

  cliente: Cliente;

  Acompanantes(){
    /*const modalRef =  this.modalService.open(AcompanantesComponent, { size: 'xl' });
    modalRef.componentInstance.reserva = this.reserva;
    this.activeModal.close();*/
  }

  Descuentos(){
    /*const modalRef =  this.modalService.open(DescuentosReservaComponent, { size: 'xl' });
    modalRef.componentInstance.reserva = this.reserva;
    this.activeModal.close();*/
  }

  Datos(){
    this.clienteService.get(this.reserva.idCliente).subscribe(clientee => {
      this.cliente = clientee;
      const modalRef =  this.modalService.open(DatosComponent, { size: 'xl' });
      modalRef.componentInstance.reserva = this.reserva;
      modalRef.componentInstance.cliente = clientee;
    });
    this.activeModal.close();
  }

  Facturar(){
    this.clienteService.get(this.reserva.idCliente).subscribe(clientee => {
      this.cliente = clientee;
      const modalRef =  this.modalService.open(FacturaDeReservaComponent, { size: 'xl' });
      modalRef.componentInstance.reserva = this.reserva;
      modalRef.componentInstance.cliente = clientee;
    });
  }

  getProductos(){
    this.productoService.getAll().subscribe(productos => this.productos = productos);
  }

  getServicios(){
    this.servicioService.getServicios(this.reserva.id).subscribe(servicios => this.servicios = servicios);
  }

  add() {
    
      if(this.servicio.cantidad<=0){
      alert("ERROR EN LA CANTIDAD, POR FAVOR VERIFICAR");
      }else{
        if(this.servicio.nombreServicio=="Seleccionar" || this.servicio.nombreServicio==""){
          alert("ERROR AL SELECCIONAR EL PRODUCTO, POR FAVOR VERIFICAR")
        }else{ 
          this.servicio.idReserva= this.reserva.id;
          this.productoService.get(this.servicio.nombreServicio).subscribe(productoo => {
          this.servicio.precio = productoo.precio;
        } )
    

        setTimeout(()=> {
          this.servicio.monto = this.servicio.precio*this.servicio.cantidad;
          this.servicioService.add(this.servicio).subscribe();
          this.onReset();
        },1300)}
      }
   
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      alert("ERROR AL AÑADIR SERVICIO, POR FAVOR INTENTELO NUEVAMENTE");
      return;
    }
    this.add();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  delete(servicio: Servicio): void {
    this.servicioService.delete(servicio)
    .subscribe(() => this.onReset());
  }

}
