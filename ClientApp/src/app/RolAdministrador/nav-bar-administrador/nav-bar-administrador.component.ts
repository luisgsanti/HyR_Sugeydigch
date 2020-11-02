import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-nav-bar-administrador',
  templateUrl: './nav-bar-administrador.component.html',
  styleUrls: ['./nav-bar-administrador.component.css']
})
export class NavBarAdministradorComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logout();
  }

}
