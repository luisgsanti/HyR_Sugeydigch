import { Component, OnInit } from '@angular/core';
import { LoginService} from '../../services/login.service'
import { Login } from '../../Clases/login'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-gestionar-personal',
  templateUrl: './gestionar-personal.component.html',
  styleUrls: ['./gestionar-personal.component.css']
})
export class GestionarPersonalComponent implements OnInit {

  logins: Login[];
  registerForm: FormGroup;
  login: Login;
  submitted = false;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.login = new Login();
    this.registerForm = this.formBuilder.group({
      identificacion: ['', Validators.required],
      usuario: ['', Validators.required],
      clave: ['', Validators.required],
      rol: ['', Validators.required],
    });
    this.getAll();  
  }

  getAll() {
    this.loginService.getAll().subscribe(login => this.logins = login);
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      alert("ERROR AL AÑADIR PERSONAL, POR FAVOR INTENTELO NUEVAMENTE");
      return;
    }
    this.add();
  }

  add() {
    this.loginService.addLogin(this.login).subscribe();
    this.onReset();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  get f() {
    return this.registerForm.controls;
  }

  delete(login: Login): void {
    this.loginService.delete(login)
    .subscribe(() => this.onReset());

    setTimeout(()=>{
      this.getAll();
    },1300)
  }

}
