import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs'
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private _httpclient: HttpClient) { }

  /**ENVIO**/

   login(mail: any, password:any): Observable<any> {
    const parametros = new HttpParams()
      .set('mail', mail)
      .set('password', password.toString())
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
          })
        };
    const url = environment.server+'api/login'
    return this._httpclient.post(url, parametros, httpOptions)
      .pipe(catchError(this.controlExcepcion));
  }

  /**EXCEPCIONES**/

  controlExcepcion(_error: HttpErrorResponse) {
    return throwError(_error);
  }
}
