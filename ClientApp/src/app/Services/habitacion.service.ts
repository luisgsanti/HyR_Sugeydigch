import { Injectable,Inject } from '@angular/core';

import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Habitacion } from '../Clases/habitacion';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string ) { }

  /** POST: add a new task to the server */
  add(habitacion: Habitacion): Observable<Habitacion> {
    return this.http.post<Habitacion>(this.baseUrl+'api/Habitacion', habitacion, httpOptions).pipe(
      tap((newHabitacion: Habitacion) => this.log(`HABITACION AGREGADA CORRECTAMENTE `/*id= ${newDocente.id}`*/)),
      catchError(this.handleError<Habitacion>('ERROR AL AGREGAR HABITACION'))
    )
  }

  /** GET Task from the server */
  getAll():Observable<Habitacion[]>
  {
    return this.http.get<Habitacion[]>(this.baseUrl+'api/Habitacion').pipe(
    tap(/*=>this.log('Se Consulta la información')*/),
    catchError(this.handleError<Habitacion[]>('getAll',[]))
    );
  }

  getDisponibles():Observable<Habitacion[]>
      {
        return this.http.get<Habitacion[]>(this.baseUrl+'api/Habitacion/Disponibles').pipe(
        tap(/*=>this.log('Se Consulta la información')*/),
        catchError(this.handleError<Habitacion[]>('getAll',[]))
        );
      }

  /** GET task by id. Will 404 if id not found */
  get(id: number): Observable<Habitacion>
  {
    const url = `${this.baseUrl + 'api/Habitacion'}/${id}`;
    return this.http.get<Habitacion>(url).pipe(
    tap(_ => this.log(`fetched cliente id=${id}`)),
    catchError(this.handleError<Habitacion>(`getcliente id=${id}`))
    );
  }

   /** PUT: update the Task on the server */
   update (habitacion: Habitacion): Observable<any> {
    const url =`${this.baseUrl + 'api/Habitacion'}/${habitacion.id}`;
    return this.http.put(url, habitacion, httpOptions).pipe(
    tap(/*_ => this.log(`updated cliente identificacion=${habitacion.id}`)*/),
    catchError(this.handleError<any>('cliente'))
    );
  }

  /** DELETE: delete the task from the server */
  delete (habitacion: Habitacion | number): Observable<Habitacion> {
    const id = typeof habitacion === 'number' ? habitacion : habitacion.id;
    const url =
    
    `${this.baseUrl + 'api/Habitacion'}/${id}`;
    
    return this.http.delete<Habitacion>(url, httpOptions).pipe(
    tap(_ => this.log(`LA HABITACION HA SIDO ELIMINADA`)),
    catchError(this.handleError<Habitacion>('deletehabitacion'))
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
