import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NuevoClienteRecepcionistaComponent } from '../../RolRecepcionista/nuevo-cliente-recepcionista/nuevo-cliente-recepcionista.component';
import { ClienteService} from '../../services/cliente.service'
import { Cliente } from '../../Clases/cliente'
import { ModificarClienteRecepcionistaComponent } from '../modificar-cliente-recepcionista/modificar-cliente-recepcionista.component'
import { LoginService} from '../../Services/login.service'
import { Login } from 'src/app/Clases/login';

@Component({
  selector: 'app-clientes-recepcionista',
  templateUrl: './clientes-recepcionista.component.html',
  styleUrls: ['./clientes-recepcionista.component.css']
})
export class ClientesRecepcionistaComponent implements OnInit {

  clientes: Cliente[];
  login : Login;
  

  constructor(private modalService: NgbModal, private clienteservice: ClienteService, private loginService: LoginService) {  }

  ngOnInit() {
    this.getAll();
  }

  open(){
    this.modalService.open(NuevoClienteRecepcionistaComponent, { size: 'lg' });
  }

  update(cliente: Cliente){
    this.loginService.getLogin(cliente.identificacion).subscribe(thelogin =>{
      this.login = thelogin;
      const modalRef= this.modalService.open(ModificarClienteRecepcionistaComponent, { size: 'lg' });
      modalRef.componentInstance.cliente = cliente;
      modalRef.componentInstance.login = this.login;
    })
    
  }

  getAll() {
    this.clienteservice.getAll().subscribe(clientes => this.clientes = clientes);
  }

}
