import { Injectable,Inject } from '@angular/core';

import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cliente } from '../Clases/cliente';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string ) { }

  /** POST: add a new task to the server */
  add(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl+'api/Cliente', cliente, httpOptions).pipe(
      tap((newDocente: Cliente) => {
        if (newDocente == null){
          this.log(`YA EXISTE UN CLIENTE CON LA IDENTIFICACION INGRESADA`);
        }else{
          this.log(`REGISTRO EXITOSO`/*id= ${newDocente.id}`*/);
        }
      }),
      catchError(this.handleError<Cliente>('Error Al Agregar Cliente'))
    )
  }

  /** GET Task from the server */
  getAll():Observable<Cliente[]>
  {
    return this.http.get<Cliente[]>(this.baseUrl+'api/Cliente').pipe(
    tap(/*=>this.log('Se Consulta la información')*/),
    catchError(this.handleError<Cliente[]>('getAll',[]))
    );
  }

  /** GET task by id. Will 404 if id not found */
  get(id: string): Observable<Cliente>
  {
    const url = `${this.baseUrl + 'api/Cliente'}/${id}`;
    return this.http.get<Cliente>(url).pipe(
    tap(/*_ => this.log(`fetched cliente id=${id}`)*/),
    catchError(this.handleError<Cliente>(`getcliente id=${id}`))
    );
  }

   /** PUT: update the Task on the server */
   update (cliente: Cliente): Observable<any> {
    const url =`${this.baseUrl + 'api/Cliente'}/${cliente.id}`;
    return this.http.put(url, cliente, httpOptions).pipe(
    tap(_ => this.log(`DATOS MODIFICADOS CORRECTAMENTE`)),
    catchError(this.handleError<any>('cliente'))
    );
  }

  /** DELETE: delete the task from the server */
  delete (cliente: Cliente | number): Observable<Cliente> {
    const id = typeof cliente === 'number' ? cliente : cliente.id;
    const url =
    
    `${this.baseUrl + 'api/Cliente'}/${id}`;
    
    return this.http.delete<Cliente>(url, httpOptions).pipe(
    tap(_ => this.log(`CLIENTE DESACTIVADO`)),
    catchError(this.handleError<Cliente>('deletecliente'))
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
