import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService} from '../../services/cliente.service'
import { LoginService} from '../../services/login.service'
import { Cliente } from '../../Clases/cliente'
import { Login } from '../../Clases/login'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-nuevo-cliente-recepcionista',
  templateUrl: './nuevo-cliente-recepcionista.component.html',
  styleUrls: ['./nuevo-cliente-recepcionista.component.css']
})
export class NuevoClienteRecepcionistaComponent implements OnInit {

  closeResult: string;
  modal : NgbModalRef;
  
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private modalService: NgbModal, 
    public activeModal: NgbActiveModal, 
    private clienteservice: ClienteService, 
    private formBuilder: FormBuilder,
    private loginServce: LoginService,
    ) {}

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
    console.log(this.cliente);
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
    this.activeModal.close();
  }

}
