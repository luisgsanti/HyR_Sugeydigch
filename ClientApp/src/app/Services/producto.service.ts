import { Injectable, Inject } from '@angular/core';

import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Producto } from '../Clases/producto';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string ) { }

  /** POST: add a new task to the server */
  add(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.baseUrl+'api/Producto', producto, httpOptions).pipe(
      tap((newProducto: Producto) => this.log(`Producto AGREGADO CORRECTAMENTE`/*id= ${newDocente.id}`*/))/*,
      catchError(this.handleError<Reserva>('Error Al Agregar Reserva')*/)
    
  }

  /** GET Task from the server */
  getAll():Observable<Producto[]>
  {
    return this.http.get<Producto[]>(this.baseUrl+'api/Producto').pipe(
    tap(/*=>this.log('Se Consulta la información')*/),
    catchError(this.handleError<Producto[]>('getAll',[]))
    );
  }

  /** GET task by id. Will 404 if id not found */
  get(nombreProducto: string): Observable<Producto>
  {
    const url = `${this.baseUrl + 'api/Producto'}/${nombreProducto}`;
    return this.http.get<Producto>(url).pipe(
    tap(/*_ => this.log(`fetched Producto id=${nombreProducto}`)*/),
    catchError(this.handleError<Producto>(`getProducto id=${nombreProducto}`))
    );
  }

   /** PUT: update the Task on the server */
   update (producto: Producto): Observable<any> {
    const url =`${this.baseUrl + 'api/Producto'}/${producto.id}`;
    return this.http.put(url, producto, httpOptions).pipe(
    tap(_ => this.log(`updated Producto id=${producto.id}`)),
    catchError(this.handleError<any>('Producto'))
    );
  }

  /** DELETE: delete the task from the server */
  delete (producto: Producto | number): Observable<Producto> {
    const id = typeof producto === 'number' ? producto : producto.id;
    const url = `${this.baseUrl + 'api/Producto'}/${id}`;
    
    return this.http.delete<Producto>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted Producto id=${id}`)),
    catchError(this.handleError<Producto>('deleteProducto'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    alert(`${message}`);
  }

}
