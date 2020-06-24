import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-nav-bar-recepcionista',
  templateUrl: './nav-bar-recepcionista.component.html',
  styleUrls: ['./nav-bar-recepcionista.component.css']
})
export class NavBarRecepcionistaComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logout();
  }

}
