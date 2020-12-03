import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs'
import { environment } from 'src/environments/environment.prod';
import { cursosModel } from '../models/cursosModel';
@Injectable({
  providedIn: 'root'
})
export class CursosService {
  constructor(private _httpclient: HttpClient) { }

  /**ENVIO**/
  
  getAllCourses() {
    const url = environment.server+'api/classes'
     return this._httpclient.get<cursosModel>(url)
       .pipe(catchError(this.controlExcepcion));
   }

   getCursoByID(id) {
    const url = environment.server+'api/classes/'+id
     return this._httpclient.get<cursosModel>(url)
       .pipe(catchError(this.controlExcepcion));
   }


  createCourse(curso: cursosModel): Observable<any> {
    const parametros = new HttpParams()
      .set('name', curso.name)
      .set('intensity', curso.intensity.toString())
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
          })
        };
    const url = environment.server+'api/classes'
    return this._httpclient.post<cursosModel>(url, parametros, httpOptions)
      .pipe(catchError(this.controlExcepcion));
  }

  editCourse(curso: cursosModel): Observable<any> {
    const parametros = new HttpParams()
      .set('id', curso.id.toString())
      .set('name', curso.name)
      .set('intensity', curso.intensity.toString())
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
          })
        };
    const url = environment.server+'api/classes'
    return this._httpclient.put<cursosModel>(url, parametros, httpOptions)
      .pipe(catchError(this.controlExcepcion));
  }

  /**EXCEPCIONES**/

  controlExcepcion(_error: HttpErrorResponse) {
    return throwError(_error);
  }
}
