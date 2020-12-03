import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs'
import { environment } from 'src/environments/environment.prod';
import { cursosModel } from '../models/cursosModel';
import { usuarioModel } from '../models/usuarioModel';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private _httpclient: HttpClient) { }

  /**ENVIO**/
  
  getAllUsers() {
    const url = environment.server+'api/user'
     return this._httpclient.get<usuarioModel>(url)
       .pipe(catchError(this.controlExcepcion));
   }

   getUserByID(id) {
    const url = environment.server+'api/user/'+id
     return this._httpclient.get<usuarioModel>(url)
       .pipe(catchError(this.controlExcepcion));
   }

 
  createUser(user: usuarioModel): Observable<any> {
    const parametros = new HttpParams()
      .set('name', user.name)
      .set('mail', user.mail)
      .set('password', user.password)
      .set('tel', user.tel.toString())
      .set('id_type', user.id_type.toString())
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
          })
        };
    const url = environment.server+'api/user'
    return this._httpclient.post<usuarioModel>(url, parametros, httpOptions)
      .pipe(catchError(this.controlExcepcion));
  }

  editUser(user: usuarioModel): Observable<any> {
    const parametros = new HttpParams()
      .set('id', user.id.toString())
      .set('name', user.name)
      .set('mail', user.mail)
      .set('tel', user.tel.toString())
      .set('id_type', user.id_type.toString())
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
          })
        };
    const url = environment.server+'api/user/'+user.id.toString();
    console.log(url)
    return this._httpclient.put<usuarioModel>(url, parametros, httpOptions)
      .pipe(catchError(this.controlExcepcion));
  }
  /**EXCEPCIONES**/

  controlExcepcion(_error: HttpErrorResponse) {
    return throwError(_error);
  }
}
