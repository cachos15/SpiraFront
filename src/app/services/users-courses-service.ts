import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs'
import { environment } from 'src/environments/environment.prod';
import { cursosModel } from '../models/cursosModel';
import { usuarioModel } from '../models/usuarioModel';
import { usuarioCursoModel } from '../models/usuarioCursoModel';
@Injectable({
  providedIn: 'root'
})
export class UsersCoursesService {
  constructor(private _httpclient: HttpClient) { }

  /**ENVIO**/
  
  getAllUsersCourses() {
    const url = environment.server+'api/classByUser'
     return this._httpclient.get<usuarioCursoModel>(url)
       .pipe(catchError(this.controlExcepcion));
   }

   getUserCourseByID(id) {
    const url = environment.server+'api/getClassesByUser' 
    const parametros = new HttpParams()
    .set('id_user', id.toString())
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
          })
        };
     return this._httpclient.post<usuarioCursoModel>(url, parametros, httpOptions)
       .pipe(catchError(this.controlExcepcion));
   }

 
  createUserCourse(user: usuarioCursoModel): Observable<any> {
    const parametros = new HttpParams()
      .set('id_user', user.id_user.toString())
      .set('id_class', user.id_class.toString())
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
          })
        };
    const url = environment.server+'api/classByUser'
    return this._httpclient.post<usuarioCursoModel>(url, parametros, httpOptions)
      .pipe(catchError(this.controlExcepcion));
  }

  editUserCourse(user: usuarioCursoModel): Observable<any> {
    const parametros = new HttpParams()
      .set('id', user.id.toString())
      .set('id_user', user.id_user.toString())
      .set('id_class', user.id_class.toString())
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
          })
        };
    const url = environment.server+'api/classByUser/'+user.id.toString();
    console.log(url)
    return this._httpclient.put<usuarioCursoModel>(url, parametros, httpOptions)
      .pipe(catchError(this.controlExcepcion));
  }
  /**EXCEPCIONES**/

  controlExcepcion(_error: HttpErrorResponse) {
    return throwError(_error);
  }
}
