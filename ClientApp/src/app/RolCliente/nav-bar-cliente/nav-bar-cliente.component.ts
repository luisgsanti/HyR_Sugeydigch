import { Component, OnInit } from '@angular/core';
import { MiCuentaComponent } from '../mi-cuenta/mi-cuenta.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService} from '../../services/cliente.service'
import { LoginService} from '../../services/login.service'

import { AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-nav-bar-cliente',
  templateUrl: './nav-bar-cliente.component.html',
  styleUrls: ['./nav-bar-cliente.component.css']
})
export class NavBarClienteComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private clienteService: ClienteService,
    private loginService: LoginService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  x:string;
  
  
  MiCuenta(){
    this.x=sessionStorage.getItem('identificontcacion');

    this.clienteService.get(this.x).subscribe(cliente => {
      this.loginService.getLogin(this.x).subscribe(login =>{
        const modalRef= this.modalService.open(MiCuentaComponent, { size: 'lg' });
        modalRef.componentInstance.cliente = cliente;
        modalRef.componentInstance.login = login;
      });
    });
  }

  logOut(){
    this.authService.logout();
  }

}
