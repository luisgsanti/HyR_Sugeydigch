import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Login } from 'src/app/Clases/login';

import { AuthService } from '../../services/auth.service';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute } from'@angular/router';


@Component({
  selector: 'app-login-inicio',
  templateUrl: './login-inicio.component.html',
  styleUrls: ['./login-inicio.component.css']
})
export class LoginInicioComponent implements OnInit {

  closeResult: string;
  modal : NgbModalRef;

  constructor(
    private authService: AuthService, 
    private loginService:LoginService,
    public activeModal: NgbActiveModal,
    private authorizeService: AuthService,
  ) { }

  ngOnInit() {
    this.objeto = new Login();
  }

  log:Login;
  objeto:Login;
  nombre:string;
  rol:string;

  x: string;

  getUsuario(objeto:Login): void {

    this.loginService.getUsuario(objeto.usuario).subscribe(aux => {
      
      this.log = aux;
      this.x = this.log.identificacion;

      if(objeto.clave === this.log.clave){
        this.authService.login(this.log.usuario,this.log.rol, this.log.identificacion);
        alert(JSON.stringify("Ha sido logeado con exito: " + this.log.usuario));
        this.close();
      }else{
        alert("Usuario o Clave Incorrecto");
      }
    });
  }

  public isAuthenticated(): boolean
  {
    let isAuth=this.authorizeService.isAuthenticated();
    if(isAuth)
    {  
      this.nombre=sessionStorage.getItem('user');
      this.rol=sessionStorage.getItem('rol');
    }
    return isAuth;
  }

  logout() {
    this.authService.logout();
  }

  close(){
    this.activeModal.close();
  }

}
