import { Component, OnInit } from '@angular/core';
import { HabitacionService} from '../../services/habitacion.service'
import { Habitacion } from '../../Clases/habitacion'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-gestionar-habitaciones',
  templateUrl: './gestionar-habitaciones.component.html',
  styleUrls: ['./gestionar-habitaciones.component.css']
})
export class GestionarHabitacionesComponent implements OnInit {

  habitaciones: Habitacion[];
  registerForm: FormGroup;
  habitacion: Habitacion;
  submitted = false;


  constructor(
    private habitacionservice: HabitacionService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      tipoDeHabitacion: ['', Validators.required],
      precio: ['', Validators.required],
      numeroCamas:  ['', Validators.required], 
      numeroHabitacion: ['', Validators.required],
    });
    this.getAll();
    this.habitacion = new Habitacion();
  }

  getAll() {
    this.habitacionservice.getAll().subscribe(habitaciones => this.habitaciones = habitaciones);
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      alert("ERROR AL AÑADIR HABITACION, POR FAVOR INTENTELO NUEVAMENTE");
      return;
    }else{
      this.add();
      
    }
    
  }

  add() {
    this.habitacion.estado="DISPONIBLE";
    this.habitacionservice.add(this.habitacion).subscribe(()=>{
      this.getAll();
    });
  }

}
