import { Component, OnInit, Input, ViewEncapsulation  } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService} from '../../services/cliente.service'
import { LoginService} from '../../services/login.service'
import { Cliente } from '../../clases/cliente'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Login } from '../../clases/login'
@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {

  closeResult: string;
  modal : NgbModalRef;
  
  registerForm: FormGroup;
  submitted = false;

  @Input() cliente: Cliente;
  @Input() login: Login;

  constructor(
    private clienteservice: ClienteService, 
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private location: Location,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      genero: ['', Validators.required],
      fechaNacimiento:  ['', Validators.required], 
      correo: [''],
      telefono:  [''],

      usuario: ['', Validators.required],
      clave: ['', Validators.required],
    });
  }

  update(): void {
    this.clienteservice.update(this.cliente).subscribe();
    this.loginService.update(this.login).subscribe();

    this.onReset();
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.update();
  }

  onReset() {
    this.activeModal.close();
  }

}
