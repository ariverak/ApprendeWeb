import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class MensajeriaService {

  private apiUrl: string = "http://201.217.241.114:3002/api/";

  constructor(private http: HttpClient, private router: Router) {

  }

  getAlumnos(): Observable < any > {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let options = {
      headers: headers
    }
    return this.http.get(this.getUrl("alumnos/"), options)
      .map(this.getDatos).catch(this.error);
  }
  private error(error: any) {
    let msg = (error.message) ? error.message : 'Error desconocido';
    console.error(msg);
    return Observable.throw(msg);
  }

  private getDatos(data: HttpResponse < any > ) {
    var response: any = data;
    if (data) {
      return response;
    } else {
      return false;
    }
  }

  private getUrl(model: string) {
    return this.apiUrl + model;
  }
}
