import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente} from '../../Clases/cliente'
import { Login } from '../../Clases/login'
import { ClienteService } from '../../Services/cliente.service'
import { LoginService } from '../../Services/login.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder, 
    private clienteservice: ClienteService, 
    private loginServce: LoginService,
    ){}
  
  cliente: Cliente;
  login: Login;
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      //genero: ['', Validators.required],
      fechaNacimiento:  ['', Validators.required], 
      correo: [''],
      telefono:  [''],

      usuario: ['', Validators.required],
      clave: ['', Validators.required],
    });
    
    this.login = new Login();
    this.cliente = new Cliente();
  }

  add() {
    
    this.clienteservice.add(this.cliente).subscribe();

    this.login.identificacion=this.cliente.identificacion;
    this.login.rol="CLIENTE";

    this.loginServce.addLogin(this.login).subscribe();

    this.onReset();
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.add();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  
  
  openLogin(){
    //this.modalService.open(LoginComponent, { centered: true });
  }

  openServicios(){
    //this.modalService.open(ServiciosComponent, { size: 'xl' });
  }

  openHabitaciones(){
    //this.modalService.open(HabitacionesComponent, { size: 'xl' });
  }

  openContactenos(){
    //this.modalService.open(ContactenosComponent, { size: 'lg' });
  }

}
