import { Injectable, Inject } from '@angular/core';

import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Servicio } from '../Clases/servicio';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor( private http:HttpClient, @Inject('BASE_URL') private baseUrl:string ) { }

  /** POST: add a new task to the server */
  add(servicio: Servicio): Observable<Servicio> {
    return this.http.post<Servicio>(this.baseUrl+'api/Servicio', servicio, httpOptions).pipe(
      tap((newServicio: Servicio) => this.log(`SERVICIO AGREGADO CORRECTAMENTE` /*id= ${newServicio.id}`*/))/*,
      catchError(this.handleError<Servicio>('ERROR AL AGREGAR EL SERVICIO'))*/)    
  }

  addServicoReserva(servicio: Servicio): Observable<Servicio> {
    return this.http.post<Servicio>(this.baseUrl+'api/Servicio', servicio, httpOptions);
  }

  /** GET Task from the server */
  getAll():Observable<Servicio[]>
  {
    return this.http.get<Servicio[]>(this.baseUrl+'api/Servicio').pipe(
    tap(/*=>this.log('Se Consulta la información')*/),
    catchError(this.handleError<Servicio[]>('getAll',[]))
    );
  }

  getServicios(id:number):Observable<Servicio[]>
  {
    const url = `${this.baseUrl + 'api/Servicio'}/Reserva/${id}`;
    return this.http.get<Servicio[]>(url).pipe(
    tap(/*=>this.log('Se Consulta la información')*/),
    catchError(this.handleError<Servicio[]>('getAll',[]))
    );
  }

  /** GET task by id. Will 404 if id not found */
  get(id: string): Observable<Servicio>
  {
    const url = `${this.baseUrl + 'api/Servicio'}/${id}`;
    return this.http.get<Servicio>(url).pipe(
    tap(_ => this.log(`fetched Servicio id=${id}`)),
    catchError(this.handleError<Servicio>(`getServicio id=${id}`))
    );
  }

   /** PUT: update the Task on the server */
   update (servicio: Servicio): Observable<any> {
    const url =`${this.baseUrl + 'api/Servicio'}/${servicio.id}`;
    return this.http.put(url, servicio, httpOptions).pipe(
    tap(_ => this.log(`updated Servicio id=${servicio.id}`)),
    catchError(this.handleError<any>('Servicio'))
    );
  }

  /** DELETE: delete the task from the server */
  delete (servicio: Servicio | number): Observable<Servicio> {
    const id = typeof servicio === 'number' ? servicio : servicio.id;
    const url = `${this.baseUrl + 'api/Servicio'}/${id}`;
    
    return this.http.delete<Servicio>(url, httpOptions).pipe(
    tap(_ => this.log(`SERVICIO ELIMINADO` /*id=${id}`*/)),
    catchError(this.handleError<Servicio>('deleteServicio'))
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
