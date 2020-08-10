import { Component, OnInit, Input  } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService} from '../../services/cliente.service'
import { Cliente } from '../../Clases/cliente'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Login } from 'src/app/Clases/login';
import { LoginService} from '../../services/login.service'


@Component({
  selector: 'app-modificar-cliente-recepcionista',
  templateUrl: './modificar-cliente-recepcionista.component.html',
  styleUrls: ['./modificar-cliente-recepcionista.component.css']
})
export class ModificarClienteRecepcionistaComponent implements OnInit {

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
      //this.get();
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

    get f() {
      return this.registerForm.controls;
    }

    update(): void {
      this.clienteservice.update(this.cliente).subscribe();
      this.loginService.update(this.login).subscribe();

      this.onReset();
    }

    desactivar(){
      //this.docente.estado="INACTIVO";
      this.clienteservice.update(this.cliente)
      .subscribe(() => this.onReset());
    }

    delete(): void {
      this.clienteservice.delete(this.cliente)
      .subscribe(() => this.onReset());
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
