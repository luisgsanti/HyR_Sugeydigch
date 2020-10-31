import { Injectable,Inject } from '@angular/core';

import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Reserva } from '../Clases/reserva';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ReservaService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string ) { }

  /** POST: add a new task to the server */
  add(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.baseUrl+'api/Reserva', reserva, httpOptions).pipe(
      tap((newDocente: Reserva) => this.log(`RESERVA AGREGADA CORRECTAMENTE`/*id= ${newDocente.id}`*/))/*,
      catchError(this.handleError<Reserva>('Error Al Agregar Reserva')*/)
    
  }

  /** GET Task from the server */
  getAll():Observable<Reserva[]>
  {
    return this.http.get<Reserva[]>(this.baseUrl+'api/Reserva').pipe(
    tap(/*=>this.log('Se Consulta la información')*/),
    catchError(this.handleError<Reserva[]>('getAll',[]))
    );
  }

  getMisReservas(id:string):Observable<Reserva[]>
  {
    const url = `${this.baseUrl + 'api/Reserva'}/Reservas/${id}`;
    return this.http.get<Reserva[]>(url).pipe(
    tap(/*=>this.log('Se Consulta la información')*/),
    catchError(this.handleError<Reserva[]>('getAll',[]))
    );
  }

  getReservasActivas():Observable<Reserva[]>
  {
    const url = `${this.baseUrl + 'api/Reserva'}/Activas`;
    return this.http.get<Reserva[]>(url).pipe(
    tap(/*=>this.log('Se Consulta la información')*/),
    catchError(this.handleError<Reserva[]>('getAll',[]))
    );
  }

  /** GET task by id. Will 404 if id not found */
  get(id: string): Observable<Reserva>
  {
    const url = `${this.baseUrl + 'api/Reserva'}/${id}`;
    return this.http.get<Reserva>(url).pipe(
    tap(_ => this.log(`fetched Reserva id=${id}`)),
    catchError(this.handleError<Reserva>(`getReserva id=${id}`))
    );
  }

   /** PUT: update the Task on the server */
   update (reserva: Reserva): Observable<any> {
    const url =`${this.baseUrl + 'api/Reserva'}/${reserva.id}`;
    return this.http.put(url, reserva, httpOptions).pipe(
    tap(_ => this.log(`CHECK OUT COMPLETADO\nRESERVA FINALIZADA` /*d=${reserva.id}`*/)),
    catchError(this.handleError<any>('Reserva'))
    );
  }

  cambiarEstato (reserva: Reserva): Observable<any> {
    const url =`${this.baseUrl + 'api/Reserva'}/${reserva.id}`;
    return this.http.put(url, reserva, httpOptions).pipe(
    tap(_ => this.log(`RESERVA CANCELADA` /*d=${reserva.id}`*/)),
    catchError(this.handleError<any>('Reserva'))
    );
  }

  /** DELETE: delete the task from the server */
  delete (reserva: Reserva | number): Observable<Reserva> {
    const id = typeof reserva === 'number' ? reserva : reserva.id;
    const url =
    
    `${this.baseUrl + 'api/Reserva'}/${id}`;
    
    return this.http.delete<Reserva>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted Reserva id=${id}`)),
    catchError(this.handleError<Reserva>('deletecliente'))
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
