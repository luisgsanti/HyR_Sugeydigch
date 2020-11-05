import { Component, OnInit } from '@angular/core';
import { ProductoService} from '../../services/producto.service'
import { Producto } from '../../Clases/producto'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-gestionar-productos',
  templateUrl: './gestionar-productos.component.html',
  styleUrls: ['./gestionar-productos.component.css']
})
export class GestionarProductosComponent implements OnInit {

  productos: Producto[];
  registerForm: FormGroup;
  producto: Producto;
  submitted = false;

  constructor(
    private productoService: ProductoService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.producto = new Producto();
    this.registerForm = this.formBuilder.group({
      nombreProdcuto: ['', Validators.required],
      precio: ['', Validators.required],
    });
    this.getAll();  
  }

  getAll() {
    this.productoService.getAll().subscribe(producto => this.productos = producto);
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      alert("ERROR AL AÑADIR PRODUCTO, POR FAVOR INTENTELO NUEVAMENTE");
      return;
    }
    this.add();
  }

  add() {
    this.productoService.add(this.producto).subscribe();
    this.onReset();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  get f() {
    return this.registerForm.controls;
  }

  delete(producto: Producto): void {
    this.productoService.delete(producto)
    .subscribe(() => this.onReset());

    setTimeout(()=>{
      this.getAll();
    },1300)
  }
}
